import { prisma } from "@/lib/prisma";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export const POST = async (req: Request) => {
    const body = await req.json();
    const { name, password } = body;
    const user = await prisma.user.findUnique({
        where: {
            name,
            password
        }
    });
    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }
    const token = sign({ user }, process.env.JWT_SECRET ?? "secret-key", { expiresIn: "1h" });

    (await cookies()).set("token", token, {
        httpOnly: true,
        // secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7
    });





    return new Response(JSON.stringify({ user, token }), { status: 200 });
}