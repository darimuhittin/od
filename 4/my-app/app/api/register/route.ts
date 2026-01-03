import { prisma } from "@/lib/prisma";

export const POST = async (req: Request) => {
    const body = await req.json();
    const { name, password } = body;
    const user = await prisma.user.create({
        data: {
            name,
            password,
        },
    });
    if (!user) {
        return new Response(JSON.stringify({ error: "User can not be created" }), { status: 500 });
    }
    return new Response(JSON.stringify({ user }), { status: 201 });
}