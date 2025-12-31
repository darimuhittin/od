import { NextResponse } from 'next/server';
import { initializeDB } from '@/lib/db';
import { User } from '@/lib/entities/User';

export async function GET() {
  try {
    const dataSource = await initializeDB();
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
    const dataSource = await initializeDB();
    const body = await request.json();
    const userRepository =  dataSource.getRepository(User);
    
    const user = userRepository.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
    });
    
    await userRepository.save(user);
    
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
     console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}



  