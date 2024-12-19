import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'; // Assuming bcryptjs is installed for hashing passwords
import { pool } from "@/lib/db";

export const PATCH = async (req) => {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email, currentPassword, newPassword, confirmPassword } = await req.json();

    if (!email || !currentPassword || !newPassword || !confirmPassword) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (newPassword !== confirmPassword) {
      return NextResponse.json({ error: "New passwords do not match." }, { status: 400 });
    }

    const client = await pool.connect();
    const userResult = await client.query(
      "SELECT id, password FROM users WHERE id = $1",
      [decoded.id]
    );

    if (userResult.rows.length === 0) {
      client.release();
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    const user = userResult.rows[0];

    // Check if the current password is correct
    const isPasswordCorrect = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordCorrect) {
      client.release();
      return NextResponse.json({ error: "Current password is incorrect." }, { status: 401 });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's email and password
    const updateQuery = `
      UPDATE users 
      SET email = $1, password = $2 
      WHERE id = $3
      RETURNING id, email;
    `;
    const updateResult = await client.query(updateQuery, [email, hashedPassword, decoded.id]);
    client.release();

    if (updateResult.rows.length > 0) {
      const updatedUser = updateResult.rows[0];
      return NextResponse.json({ success: true, user: updatedUser }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Failed to update account details." }, { status: 500 });
    }
  } catch (error) {
    console.error("Error updating account details:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
};
