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
      `SELECT e.*, 
        u.firstname AS instructor_first_name, 
        u.lastname AS instructor_last_name
        FROM public.enrollment e
        LEFT JOIN public.users u ON e.instructor_id = u.id
        where e.user_id = $1`,
      [decoded.id]
    );

    client.release();

    if (result.rows.length > 0) {
      const user = result.rows;
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
