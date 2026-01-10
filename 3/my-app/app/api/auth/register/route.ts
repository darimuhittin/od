import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
        const { email, password ,name } = await request.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });
        return NextResponse.json({ user });
    } catch (error) {
        console.error('Registration failed', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}