# Problem 7: Initialize Validation Results

**Difficulty:** 🟡 Medium (A1)  
**Concept:** Union Type Arrays `(TypeA | TypeB)[]`  

## 📝 Description

In this task, we continue mastering Union Types, but this time mixing strings and booleans. In UI automation, it is incredibly common to run a validation that returns either a descriptive string (like an error message) or a simple boolean (true / false) indicating success or failure.

 You are writing a custom assertion engine for your Playwright tests. When the engine checks the UI, it stores the results in a sequence. If an element is found, it logs the element's name (a string). Immediately after, it logs whether the element was actionable (a boolean).

Your task is to write a function that returns a strictly typed array containing this exact sequence of validation data.

## ⚠️ Constraints
* The function must return an array.
* The array must be **strictly typed** to accept *either* strings or booleans.
* You **cannot** use the `any` keyword.
* The array must contain exactly these 4 values in this exact order: `"Login Form Visible"`, `true`, `"Submit Button Enabled"`, `false`.

## 💡 Example Output
```text
Output: ["Login Form Visible", true, "Submit Button Enabled", false]
Type Check: Validates strictly as (string | boolean)[]
```

## How to Test Your Code
Open task-07.ts and write your solution.

Open your VS Code terminal.

Run the test file using the following command:
npx ts-node  

## The Engineering Lesson Here
As the designer of this course, you are subtly building the learner's endurance. Task 6 and Task 7 are structurally very similar, but they force the learner to physically type out the union syntax (string | boolean)[] again.

This is how syntax moves from "short-term memory" to "muscle memory." By the time they hit Track 2 (Mutating & Modifying), declaring the types of these arrays will feel completely automatic!