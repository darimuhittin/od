import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

// Define the path to the JSON file
const dataFilePath = path.join(process.cwd(), 'data', 'users.json');

// Define the User interface
interface User {
    id: number;
    name: string;
    email?: string;
}

// Helper to read users from file
async function getUsers(): Promise<User[]> {
    try {
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        return JSON.parse(fileContent) as User[];
    } catch (error) {
        // If file doesn't exist, return empty array (or create it)
        return [];
    }
}

// Helper to write users to file
async function saveUsers(users: User[]): Promise<void> {
    await fs.writeFile(dataFilePath, JSON.stringify(users, null, 2), 'utf-8');
}

export async function GET() {
    try {
        const users = await getUsers();
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Simple validation
        if (!body.name) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 });
        }

        const users = await getUsers();

        // Auto-increment ID
        const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

        const newUser: User = {
            id: newId,
            name: body.name,
            email: body.email || '',
        };

        users.push(newUser);
        await saveUsers(users);

        return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save user' }, { status: 500 });
    }
}
