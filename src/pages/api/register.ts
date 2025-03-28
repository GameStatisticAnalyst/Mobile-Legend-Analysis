import { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../lib/db';
import { generateToken, hashPassword, setTokenCookie } from '../../lib/auth';

export default async function register(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const db = await getDB();

    // Check if user already exists
    const existingUser = await db.get(
      'SELECT id FROM users WHERE username = ? OR email = ?',
      [username, email]
    );

    if (existingUser) {
      return res.status(409).json({ message: 'Username or email already exists' });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Insert new user
    const result = await db.run(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    // Generate token
    const token = generateToken(result.lastID);

    // Set cookie
    setTokenCookie(res, token);

    return res.status(201).json({
      user: { id: result.lastID, username, email },
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
