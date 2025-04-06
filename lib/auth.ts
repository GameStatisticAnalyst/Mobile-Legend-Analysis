import jwt, { JwtPayload } from "jsonwebtoken";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
// import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();

interface User {
  id: string;
  email: string;
  password: string;
  role: "admin" | "user";
}

const users: User[] = [
  { id: "1", email: "admin@test.com", password: "123456", role: "admin" },
];

const SECRET: string = process.env.JWT_SECRET || "secret";

interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export async function login({ email, password }: any): Promise<LoginResponse> {
  const user: User | undefined = users.find(
    (user: User): boolean => user.email === email && user.password === password
  );

  if (!user) return { success: false, message: "Invalid credentials" };

  const token: string = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    SECRET,
    {
      expiresIn: "1d",
    }
  );

  return { success: true, token };
}

interface RegisterResponse {
  success: boolean;
  message?: string;
}

export async function register({
  email,
  password,
}: any): Promise<RegisterResponse> {
  const exists: boolean = users.some(
    (user: User): boolean => user.email === email
  );
  if (exists) return { success: false, message: "Email already used" };

  users.push({ id: Date.now().toString(), email, password, role: "user" });
  return { success: true };
}

export async function getCurrentUser(): Promise<JwtPayload | null> {
  const cookieStore: ReadonlyRequestCookies = await cookies();
  const token: string | undefined = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const user = jwt.verify(token, SECRET) as jwt.JwtPayload;
    return user;
  } catch (e) {
    return null;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          return null;
        }

        return { id: user.id, email: user.email, name: user.name };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
