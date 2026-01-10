import { verify } from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { User } from '../../../generated/prisma/client';

export const GET = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  const data = verify(token, process.env.JWT_SECRET || 'secret-key') as { user: User }
  return NextResponse.json({ user: data.user });
}
