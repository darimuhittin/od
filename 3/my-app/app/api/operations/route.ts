import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { validateToken } from "@/lib/api"
export async function POST(request: Request) {
    const token = await validateToken()
    if (!token) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }
    const body = await request.json()
    const { first, second, operator, name, result } = body

    const operation = await prisma.operations.create({
        data: {
            first: first.toString(),
            second: second.toString(),
            operator,
            name,
            result: result.toString()
        }
    })

    return NextResponse.json(operation)
}

export async function GET() {
    const token = await validateToken()
    if (!token) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }
    const operations = await prisma.operations.findMany()
    return NextResponse.json(operations)
}