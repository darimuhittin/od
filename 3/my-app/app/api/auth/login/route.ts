import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
const SECRET_KEY = 'secret-key'; // In production, use process.env.JWT_SECRET

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Mock validation

    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      if (!user.password || !password) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
      }
      const token = sign({ user }, SECRET_KEY, { expiresIn: '1h' });

      (await cookies()).set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600,
        path: '/',
      });

      return NextResponse.json({ user, token });
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
