import { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../lib/db';
import { verifyPassword, setTokenCookie, generateToken } from '../../lib/auth';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const db = await getDB();

    // Find user
    const user = await db.get(
      'SELECT id, username, email, password FROM users WHERE username = ?',
      [username]
    );

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify password
    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(user.id);

    // Set cookie
    setTokenCookie(res, token);

    return res.status(200).json({
      user: { id: user.id, username: user.username, email: user.email },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
