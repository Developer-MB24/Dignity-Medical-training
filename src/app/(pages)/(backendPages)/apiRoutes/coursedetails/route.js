import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const GET = async () => {
  try {
    const client = await pool.connect();

    const result = await client.query(`
      SELECT DISTINCT ON (e.paypal_order_id)
        e.*, 
        s.instructor_id,
        u.firstname AS instructor_first_name,
        u.lastname AS instructor_last_name,
        s.url AS course_url
      FROM public.enrollment e
      INNER JOIN public.schedule s ON e.course_id = s.course_id
      INNER JOIN public.users u ON s.instructor_id = u.id
      ORDER BY e.paypal_order_id, e.create_time DESC;
    `);

    client.release();

    if (result.rows.length > 0) {
      return NextResponse.json(
        { success: true, enrollmentData: result.rows },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "No enrollment data found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching enrollment data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};


export const POST = async (request) => {
  try {
    const { course_title, coursetype, selected_language } = await request.json();

    // Validate the payload
    if (!course_title || !coursetype || !selected_language) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const client = await pool.connect();

    // Build the query dynamically based on the provided fields
    const query = `
      SELECT *
      FROM public.courses
      WHERE course_title = $1
        AND coursetype = $2
        AND selected_language = $3
      ORDER BY course_id, created_at DESC;
    `;
    // AND location = $3
    const result = await client.query(query, [course_title, coursetype, selected_language]);

    client.release();

    if (result.rows.length > 0) {
      return NextResponse.json(
        { success: true, enrollmentData: result.rows },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "No enrollment data found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error fetching enrollment data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};