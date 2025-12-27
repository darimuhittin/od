"use strict";
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
let score = 100; // Like 'int', 'float', 'double' all in one
let username = "Dari"; // Like std::string
let isActive = true; // Like bool
function printUser(user) {
    console.log(`User ${user.id}: ${user.name}`);
}
const newUser = {
    id: 1,
    name: "Admin"
    // role is optional, so we can skip it
};
let numberBox = { contents: 42 };
let stringBox = { contents: "fragile" };
// Function example
// template <typename T> 
// T identity(T arg) { return arg; }
function identity(arg) {
    return arg;
}
let out = identity(123);
function printId(id) {
    // We can check the type at runtime (Type Guarding)
    if (typeof id === "string") {
        console.log("ID is string: " + id.toUpperCase());
    }
    else {
        console.log("ID is number: " + (id * 2));
    }
}
printId(101);
printId("202-A");
//# sourceMappingURL=main.js.map