import { NextResponse } from 'next/server';
import { getUserById, updateUser, deleteUser } from '@/lib/services/user';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await getUserById(Number(id));
    return NextResponse.json(user);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const {id} = await params;
    await deleteUser(Number(id));
    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
     console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
      const { id } = await params;
      const body = await request.json();
      const updatedUser = await updateUser(Number(id), body);
      
      if (!updatedUser) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      
      return NextResponse.json(updatedUser);
    } catch (error) {
      console.error("Database error:", error);
      return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
}

