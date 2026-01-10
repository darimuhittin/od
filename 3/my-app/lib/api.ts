import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

export const validateToken = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    if (!token) {
        return null
    }
    try {
        const data = verify(token, process.env.JWT_SECRET || 'secret-key')
        if (!data) {
            return null
        }
        return data
    } catch (error) {
        return null
    }
}