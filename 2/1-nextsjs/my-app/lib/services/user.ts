import { initializeDB } from '@/lib/db';
import { User } from '@/lib/entities/User';

export async function getUserById(id: number) {
    const dataSource = await initializeDB();
    const userRepository = dataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: Number(id) });
    return user;
}
