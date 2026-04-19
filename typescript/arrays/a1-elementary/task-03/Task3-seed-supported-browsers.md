# Problem 3: Seed Supported Browsers

**Difficulty:** 🟢 Easy  
**Concept:** Pre-filled String Arrays  

## 📝 Description
Your automation framework is designed to run cross-browser tests. Before the test runner kicks off, it needs to know which browser engines it should execute against.

Your task is to write a function that returns an array pre-filled with the exact names of the three major browser engines supported by Playwright.

## ⚠️ Constraints
* The function must return an array of strings (`string[]` or `Array<string>`).
* The array must contain exactly three strings: `"chromium"`, `"firefox"`, and `"webkit"`.
* The items must be spelled exactly as shown (case-sensitive).
* You **cannot** use the `any` keyword.

## 💡 Example Output
```text
Output: ["chromium", "firefox", "webkit"]
Type Check: Validates strictly as string[]
```

## How to Test Your Code
Open task-03-seed-supported-browsers.ts and write your solution.

Open your VS Code terminal.

Run the test file using the following command:
npx ts-node typescript/lesson-1-arrays/task-03-seed-supported-browsers.ts 