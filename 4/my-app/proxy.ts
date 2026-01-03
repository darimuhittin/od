// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const token = request.cookies.get('token')

    const { pathname } = request.nextUrl

    if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname === '/favicon.ico') {
        return NextResponse.next()
    }

    if (!token && pathname !== '/login' && pathname !== '/register') {
        return NextResponse.redirect(new URL('/login', request.url))
    } else {
        return NextResponse.next()
    }
}