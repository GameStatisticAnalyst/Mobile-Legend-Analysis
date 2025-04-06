import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { JwtPayload } from "jsonwebtoken";

interface ErrorResponse {
  error: string;
}

export async function GET(): Promise<NextResponse<ErrorResponse | JwtPayload>> {
  const user: JwtPayload | null = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  return NextResponse.json(user);
}
