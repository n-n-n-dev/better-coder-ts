# Problem 2: Initialize Retry Counts (Generic Syntax)

**Difficulty:** 🟢 Easy  
**Concept:** Number Arrays & Generic Syntax (`Array<T>`)

## 📝 Description
In your test automation framework, tests occasionally fail due to network blips. 
You are building a retry mechanism that needs to track how many times a specific test has been retried.

Before the test run begins, you need to initialize an empty array to store these numeric counts. 
For this task, you must use the **Generic Array Syntax** instead of the standard bracket syntax.

## ⚠️ Constraints
* The function must return an array.
* The array must be **strictly typed** to only accept numbers.
* You **must** use the generic syntax: `Array<Type>` (Do not use `number[]`).
* You **cannot** use the `any` keyword.
* The array must be initialized as empty.

## 💡 Example Output
```text
Output: []
Type Check: Validates strictly as Array<number>
```

## 💡How to Test Your Code
Open task-02.ts and write your solution.

Open your VS Code terminal.

Run the test file using the following command:
npx ts-node typescript/lesson-1-arrays/task-02.test.ts

**

### 💻 2. The TypeScript File (`task-02.ts`)

```typescript
/**
 * Task 2: Initialize Retry Counts (Generic Syntax)
 * Read the requirements in task-02.md
 */

export function getRetryCounts(): Array<number> {
    // TODO: Declare, strictly type (using Array<number>), 
    // and initialize an empty array of numbers.
    // Return that array.
}