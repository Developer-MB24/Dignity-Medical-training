import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import path from "path";
import { promises as fsPromises } from "fs";
import multer from "multer";

// Configure multer to store files in the public/assets folder
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/assets",
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

// Function to handle file upload
const uploadMiddleware = (req) =>
  new Promise((resolve, reject) => {
    upload.single("uploadImage")(req, {}, (err) => {
      if (err) return reject(err);
      resolve(req.file);
    });
  });

export async function PATCH(req) {
  try {
    // Parse the form data
    const formData = await req.formData();
    const file = formData.get("uploadImage");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Save the file manually to the assets folder
    const filePath = `/assets/${Date.now()}-${file.name}`;
    const fileBuffer = await file.arrayBuffer();
    const absolutePath = path.join(process.cwd(), "public", filePath);

    // Write file to disk
    await fsPromises.writeFile(absolutePath, Buffer.from(fileBuffer));

    const userId = req.headers.get("user-id"); // Assume userId is passed in headers or use req.body depending on your structure

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    // Connect to the database
    const client = await pool.connect();

    // Update the `userimage` field for the given user ID
    const updateQuery = `
      UPDATE users 
      SET userimage = $1
      WHERE id = $2
      RETURNING id, userimage;
    `;
    const result = await client.query(updateQuery, [filePath, userId]);

    client.release();

    if (result.rows.length > 0) {
      return NextResponse.json({
        success: true,
        message: "User image updated successfully",
        user: result.rows[0],
      });
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
