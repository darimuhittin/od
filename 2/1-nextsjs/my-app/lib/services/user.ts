import { prisma } from '@/lib/prisma';
import { User } from '@prisma/client';

export async function getUserById(id: number) {
    const user = await prisma.user.findUnique({
        where: { id: Number(id) },
    });
    return user;
}

export async function getAllUsers() {
    return await prisma.user.findMany();
}

export async function createUser(userData: Omit<User, 'id'>) {
    const user = await prisma.user.create({
        data: userData,
    });
    return user;
}

export async function updateUser(id: number, userData: Partial<User>) {
    const existingUser = await prisma.user.findUnique({
        where: { id },
    });
    if (!existingUser) return null;

    const user = await prisma.user.update({
        where: { id },
        data: userData,
    });
    return user;
}

export async function deleteUser(id: number) {
    return await prisma.user.delete({
        where: { id },
    });
}
