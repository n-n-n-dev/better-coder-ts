/**
 * Task 9: Initialize Mock Users
 * Read the requirements in task-09.md
 */

// TODO 1: Create an interface named 'User'.
// It must require an 'id' (number) and a 'name' (string).
export interface User {
    id: number;
    name: string; 
}

// TODO 2: Strictly type the return of this function to be an array of your User interface.
export function getMockUsers() {
    // TODO 3: Return an array containing exactly two user objects.
    const users: User[] = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ];
    // Example object: { id: 1, name: "Alice" }
    return users;
     
}