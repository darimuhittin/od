import { NextResponse } from 'next/server';
import { initializeDB } from '@/lib/db';
import { User } from '@/lib/entities/User';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const dataSource = await initializeDB();
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: Number(id) });
    return NextResponse.json(user);
}
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const dataSource = await initializeDB();
    const userRepository = dataSource.getRepository(User);
    const {id} = await params;
    
    await userRepository.delete(Number(id));
    
    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
    
  } catch (error) {
     console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
      const dataSource = await initializeDB();
      const userRepository = dataSource.getRepository(User);
      const { id } = await params;
      const body = await request.json();
      const user = await userRepository.findOneBy({ id: Number(id) });
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      await userRepository.update(Number(id), body);
      const updatedUser = await userRepository.findOneBy({ id: Number(id) });
      return NextResponse.json(updatedUser);
    } catch (error) {
      console.error("Database error:", error);
      return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
  }

