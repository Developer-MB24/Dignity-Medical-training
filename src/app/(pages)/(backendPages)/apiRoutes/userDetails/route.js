// pages/apiRoutes/userdetails.js

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { pool } from "@/lib/db";

export const GET = async (req) => {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const client = await pool.connect();
    const result = await client.query(
      "SELECT id, firstname, lastname, email, role, biography, userimage FROM users WHERE id = $1",
      [decoded.id]
    );

    client.release();

    if (result.rows.length > 0) {
      const user = result.rows[0];
      return NextResponse.json({ success: true, user }, { status: 200 });
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

// Add the PATCH method for updating user profile
export const PATCH = async (req) => {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { firstName, lastName, biography } = await req.json();

    const client = await pool.connect();
    const updateQuery = `
      UPDATE users 
      SET firstname = $1, lastname = $2, biography = $3 
      WHERE id = $4
      RETURNING id, firstname, lastname, biography;
    `;
    const result = await client.query(updateQuery, [
      firstName,
      lastName,
      biography,
      decoded.id,
    ]);

    client.release();

    if (result.rows.length > 0) {
      const updatedUser = result.rows[0];
      return NextResponse.json(
        { success: true, user: updatedUser },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error updating user profile:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
