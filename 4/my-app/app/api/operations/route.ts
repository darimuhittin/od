import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
export const POST = async (req: Request) => {

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }
    const decodedToken = verify(token, process.env.JWT_SECRET ?? "secret-key");

    console.log("DECODED : ", decodedToken);
    const body = await req.json();
    const { num1, num2, operand, result } = body;
    const operation = await prisma.operation.create({
        data: {
            num1: num1,
            num2: num2,
            operand: operand,
            result: result,
        },
    });
    console.log(operation);
    return new Response(JSON.stringify({ result }));
}


export const GET = async () => {
    const ops = await prisma.operation.findMany()
    return new Response(JSON.stringify({ operations: ops }));
}