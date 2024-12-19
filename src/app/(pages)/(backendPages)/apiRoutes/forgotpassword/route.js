import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import { pool } from '@/lib/db'; // Adjust the import path based on your project structure

export async function POST(req, res) {
  const { email } = await req.json();

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
  }

  try {
    // Check if the email exists in the database
    const { rows } = await pool.query('SELECT id FROM users WHERE email = $1', [email]);

    if (rows.length === 0) {
      // If the email is not found
      return new Response(JSON.stringify({ error: 'Email not found' }), { status: 404 });
    }

    // Generate a unique token for password reset
    const token = uuidv4();
    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}&email=${encodeURIComponent(email)}`;

    // Save the token in the database (optional, depending on your reset flow)
    // Example query: await pool.query('UPDATE users SET reset_token = $1 WHERE email = $2', [token, email]);

    // Create a Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the password reset email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <p>Hi,</p>
        <p>We received a request to reset your password. Click the link below to reset it:</p>
        <a href="${resetLink}">Reset Password</a>
        <p>If you did not request a password reset, please ignore this email.</p>
        <p>Best regards,<br/>Your Team</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Reset link sent successfully' }), { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Failed to send reset link' }), { status: 500 });
  }
}
