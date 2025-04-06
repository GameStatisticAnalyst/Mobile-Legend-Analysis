import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { JwtPayload } from "jsonwebtoken";

interface SessionResponse {
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
}

export async function GET(
  req: Request
): Promise<NextResponse<SessionResponse>> {
  const user: JwtPayload | null = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({
    user: user && typeof user === "object" && "id" in user && "name" in user && "email" in user
      ? { id: user.id as string, name: user.name as string, email: user.email as string }
      : null,
  });
}
