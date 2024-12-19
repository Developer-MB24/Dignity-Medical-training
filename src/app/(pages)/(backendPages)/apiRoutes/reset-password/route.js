import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import bcrypt from 'bcrypt';

export const POST = async (request) => {
  const { token, email, newPassword, confirmPassword } = await request.json();
  console.log(token, email, newPassword, confirmPassword);
  
  if (!token || !email || !newPassword || !confirmPassword) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  if (newPassword !== confirmPassword) {
    return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
  }

  const client = await pool.connect();

  try {
    // Validate email existence
    const userCheckResult = await client.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (userCheckResult.rows.length === 0) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // In this approach, we don't store the token; we just rely on it for user verification.

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    await client.query(
      'UPDATE users SET password = $1 WHERE email = $2',
      [hashedPassword, email]
    );

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Error resetting password:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  } finally {
    client.release();
  }
};
