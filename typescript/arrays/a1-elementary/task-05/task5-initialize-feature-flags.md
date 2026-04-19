# Problem 5: Initialize Feature Flags

**Difficulty:** 🟢 Easy  
**Concept:** Boolean Arrays  

## 📝 Description
Your engineering team is rolling out new experimental features for the application. Your automation framework needs to read a list of "Feature Flags" to know which tests to skip and which to run.

Your task is to write a function that returns an array of booleans representing the state of three specific features:
1. New UI Engine (Active)
2. Beta Payment Gateway (Inactive)
3. Headless Browser Mode (Active)

## ⚠️ Constraints
* The function must return an array.
* The array must be **strictly typed** to only accept booleans.
* The array must contain exactly these three boolean values in this exact order: `true`, `false`, `true`.
* You **cannot** use the `any` keyword.

## 💡 Example Output
```text
Output: [true, false, true]
Type Check: Validates strictly as boolean[]
```

## How to Test Your Code
Open task-05.ts and write your solution.

Open your VS Code terminal.

Run the test file using the following command:npx ts-node  