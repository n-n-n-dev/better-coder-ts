# Problem 4: Initialize Expected Status Codes

**Difficulty:** 🟢 Easy  
**Concept:** Pre-filled Number Arrays  

## 📝 Description
You are building the assertions module for a new API testing framework. The framework needs a baseline array of common HTTP status codes to validate incoming network responses.

Your task is to write a function that returns an array of numbers representing these specific status codes: `200` (OK), `201` (Created), `400` (Bad Request), `404` (Not Found), and `500` (Internal Server Error).

## ⚠️ Constraints
* The function must return an array.
* The array must be **strictly typed** to only accept numbers.
* The array must contain exactly these 5 numbers: `200`, `201`, `400`, `404`, `500`.
* You **cannot** use the `any` keyword.

## 💡 Example Output
```text
Output: [200, 201, 400, 404, 500]
Type Check: Validates strictly as number[]
```

## How to Test Your Code
Open task-04.ts and write your solution.

Open your VS Code terminal.

Run the test file using the following command:
npx ts-node t 