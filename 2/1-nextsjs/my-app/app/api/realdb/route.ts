import { NextResponse } from 'next/server';
import { initializeDB } from '@/lib/db';
import { User } from '@/lib/entities/User';
import { getAllUsers, createUser } from '@/lib/services/user';

export async function GET() {
  try {
    const users = await getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate body if needed, currently just passing through
    const user = await createUser({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    });
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
     console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}



  