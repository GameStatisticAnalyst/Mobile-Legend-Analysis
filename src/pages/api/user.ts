import { NextApiRequest, NextApiResponse } from 'next';
import { getDB } from '../../lib/db';
import { verifyToken } from '../../lib/auth';

export default async function user(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const db = await getDB();
    const user = await db.get(
      'SELECT id, username, email, createdAt FROM users WHERE id = ?',
      [decoded.userId]
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error('User error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
