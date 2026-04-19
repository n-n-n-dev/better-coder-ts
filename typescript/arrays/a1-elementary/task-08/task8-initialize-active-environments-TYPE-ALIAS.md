# Problem 8: Initialize Active Environments (Type Alias)

**Difficulty:** 🟡 Medium (A1)  
**Concept:** Type Aliases & Literal Types  

## 📝 Description
In this task, we level up from standard Union Types to Type Aliases. In enterprise automation, you should never rely on raw strings for critical configurations (like environments or user roles) because a simple typo ("DEv" instead of "DEV") will crash your test suite. By creating a custom Type, you force the TypeScript compiler to check your spelling!

Your automation framework can run tests against three specific environments: `"DEV"`, `"QA"`, and `"PROD"`. 

To prevent other engineers from accidentally making typos in the configuration file, you must create a custom Type Alias named `Environment` that only accepts those three exact strings. 

Once your custom type is created, write a function that returns an array containing only the `"DEV"` and `"QA"` environments.

## ⚠️ Constraints
* You must define a custom type: `export type Environment = ...`
* The function must return an array typed strictly as your custom `Environment[]`.
* The array must contain exactly two values: `"DEV"` and `"QA"`.
* You **cannot** use `string[]` or the `any` keyword.

## 💡 Example Output
```text
Output: ["DEV", "QA"]
Type Check: Validates strictly as Environment[] (rejects "STAGING" or "qa")
```

##  How to Test Your Code
Open task-08.ts and write your solution.

Open your VS Code terminal.

Run the test file using the following command:
npx ts-node  

## The Engineering Lesson Here
If the learner tries to type "STAGING" inside the getActiveEnvironments array, the task-08.test.ts script won't even execute. The ts-node engine will immediately crash with this error:

Type '"STAGING"' is not assignable to type 'Environment'.

This proves to the learner that TypeScript is acting as a protective barrier before the code even hits the testing phase. This is the exact reason why we use Type Aliases in professional Playwright framework design!
