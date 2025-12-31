import { initializeDB } from '@/lib/db';
import { User } from '@/lib/entities/User';

export async function getUserById(id: number) {
    const dataSource = await initializeDB();
    const userRepository = dataSource.getRepository<User>("User");
    const user = await userRepository.findOneBy({ id: Number(id) });
    return user;
}

export async function getAllUsers() {
    const dataSource = await initializeDB();
    const userRepository = dataSource.getRepository<User>("User");
    return await userRepository.find();
}

export async function createUser(userData: Partial<User>) {
    const dataSource = await initializeDB();
    const userRepository = dataSource.getRepository<User>("User");
    const user = userRepository.create(userData);
    await userRepository.save(user);
    return user;
}

export async function updateUser(id: number, userData: Partial<User>) {
    const dataSource = await initializeDB();
    const userRepository = dataSource.getRepository<User>("User");
    const user = await userRepository.findOneBy({ id });
    if (!user) return null;
    await userRepository.update(id, userData);
    return await userRepository.findOneBy({ id });
}

export async function deleteUser(id: number) {
    const dataSource = await initializeDB();
    const userRepository = dataSource.getRepository<User>("User");
    return await userRepository.delete(id);
}
