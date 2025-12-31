import { NextResponse } from 'next/server';
import { initializeDB, dataSource } from '@/lib/db';
import { User } from '@/lib/entities/User';

export async function GET() {
  try {
    await initializeDB();
    const userRepository = dataSource.getRepository(User);
    const users = await userRepository.find();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await initializeDB();
    const body = await request.json();
    const userRepository = dataSource.getRepository(User);
    
    const user = new User();
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.email = body.email;
    
    await userRepository.save(user);
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
     console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
