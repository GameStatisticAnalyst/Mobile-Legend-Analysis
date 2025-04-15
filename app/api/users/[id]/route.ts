import { NextResponse } from 'next/server'
import { prisma } from "../../../../lib/prisma";


// GET /api/users/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/users/[id]
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params
  const { name, email } = await request.json()

  if (!name && !email) {
    return NextResponse.json(
      { error: 'No fields to update' },
      { status: 400 }
    )
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(email && { email }),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    })

    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json(
      { error: 'User not found or update failed' },
      { status: 404 }
    )
  }
}

// DELETE /api/users/[id]
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params

  try {
    await prisma.user.delete({
      where: { id },
    })
    return new NextResponse(null, { status: 204 }) // No Content
  } catch (error) {
    console.error('Error deleting user:', error)
    return NextResponse.json(
      { error: 'User not found or deletion failed' },
      { status: 404 }
    )
  }
}
