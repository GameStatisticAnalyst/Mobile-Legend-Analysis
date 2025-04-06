import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

interface SessionUser {
  id: string;
  name?: string | null;
  email?: string | null;
  role?: string | null;
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    const userData: SessionUser = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      role: (session.user as any).role,
    };

    return NextResponse.json({ user: userData });
  } catch (error) {
    console.error("Session error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
