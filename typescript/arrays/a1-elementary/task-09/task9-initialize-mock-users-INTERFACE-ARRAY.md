# Problem 9: Initialize Mock Users (Interface Array)

**Difficulty:** 🟡 Medium (A1)  
**Concept:** Interfaces & Arrays of Objects `Type[]`  

## 📝 Description

In this task, we cross a major threshold: Interfaces and Object Arrays. In real-world automation, you rarely deal with arrays of simple strings or numbers. You deal with arrays of Objects (like a list of users from a database, or a list of products on a page). Defining an interface is how we tell TypeScript exactly what shape those objects must have.

You are writing API tests that require a payload of user data. Before making the API call, you need to generate a mock array of users.

To ensure the data is perfectly formatted, you must first design a TypeScript `interface` called `User` that dictates exactly what properties a user object must have. Then, write a function that returns an array containing exactly two user objects that match that interface.

## ⚠️ Constraints
* You must define an interface: `export interface User { ... }`
* The `User` interface must have two strict properties: 
  * `id` (must be a number)
  * `name` (must be a string)
* The function must return an array typed strictly as your custom `User[]`.
* The array must contain exactly two user objects.
* You **cannot** use the `any` keyword.

## 💡 Example Output
```text
Output: [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' } ]
Type Check: Validates strictly as User[]
```

##  How to Test Your Code
Open task-09.ts and write your solution.

Open your VS Code terminal.

Run the test file using the following command:
npx ts-node  