import { NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import bcrypt from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here';
const MAX_AGE = 60 * 60 * 24 * 7; // 1 week

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export function setTokenCookie(res: NextApiResponse, token: string) {
  const cookie = serialize('authToken', token, {
    maxAge: MAX_AGE,
    expires: new Date(Date.now() + MAX_AGE * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax',
  });

  res.setHeader('Set-Cookie', cookie);
}

export function clearTokenCookie(res: NextApiResponse) {
  const cookie = serialize('authToken', '', {
    maxAge: -1,
    path: '/',
  });

  res.setHeader('Set-Cookie', cookie);
}

export function generateToken(userId: number): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: MAX_AGE });
}

export function verifyToken(token: string): { userId: number } | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    return decoded;
  } catch (error) {
    return null;
  }
}
