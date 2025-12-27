/**
 * TypeScript for C++ Developers
 * -----------------------------
 * JavaScript is loosely typed, which drives C++ developers crazy.
 * TypeScript brings type safety back, similar to C++.
 */

// ==========================================
// 1. Static Typing
// C++: int x = 10; string name = "John";
// ==========================================

let score: number = 100;        // Like 'int', 'float', 'double' all in one
let username: string = "Dari";  // Like std::string
let isActive: boolean = true;   // Like bool

// score = "Hello"; // Error: Type 'string' is not assignable to type 'number'.


// ==========================================
// 2. Interfaces (Like C++ Structs)
// C++:
// struct User {
//     int id;
//     string name;
// };
// ==========================================

interface User {
    id: number;
    name: string;
    role?: string; // Optional field (unique to JS/TS)
}

function printUser(user: User): void {
    console.log(`User ${user.id}: ${user.name}`);
}

const newUser: User = {
    id: 1,
    name: "Admin"
    // role is optional, so we can skip it
};

// ==========================================
// 3. Generics (Like C++ Templates)
// C++:
// template <typename T>
// struct Box {
//     T value;
// };
// ==========================================

interface Box<T> {
    contents: T;
}

let numberBox: Box<number> = { contents: 42 };
let stringBox: Box<string> = { contents: "fragile" };

// Function example
// template <typename T> 
// T identity(T arg) { return arg; }
function identity<T>(arg: T): T {
    return arg;
}

let out = identity<number>(123);


// ==========================================
// 4. Union Types (Concept not directly in C++, maybe std::variant)
// Allows a variable to hold one of several types.
// ==========================================

type ID = string | number; // ID can be EITHER a string OR a number

function printId(id: ID) {
    // We can check the type at runtime (Type Guarding)
    if (typeof id === "string") {
        console.log("ID is string: " + id.toUpperCase());
    } else {
        console.log("ID is number: " + (id * 2));
    }
}

printId(101);
printId("202-A");
