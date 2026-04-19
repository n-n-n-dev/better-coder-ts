# Problem 6: Initialize Mixed Telemetry Logs

**Difficulty:** 🟡 Medium (A1)  
**Concept:** Union Type Arrays `(TypeA | TypeB)[]`  

## 📝 Description
You are building a custom telemetry logger for your automation framework. When a test executes, this logger records events. Sometimes it records numeric HTTP status codes, and other times it records string-based error messages. 

Your task is to write a function that returns an array pre-filled with a specific sequence of logs containing both numbers and strings.

## ⚠️ Constraints
* The function must return an array.
* The array must be **strictly typed** to accept *either* strings or numbers.
* You **cannot** use the `any` keyword.
* The array must contain exactly these 4 values in this exact order: `101`, `"Error"`, `200`, `"Success"`.

## 💡 Example Output
```text
Output: [101, "Error", 200, "Success"]
Type Check: Validates strictly as (string | number)[]
```

## How to Test Your Code
Open task-06.ts and write your solution.

Open your VS Code terminal.

Run the test file using the following command:
npx ts-node  

## The Engineering Lesson Here
Look closely at the return type in the function signature: (string | number)[].

Notice the parentheses () around string | number. If you forget the parentheses and write string | number[], TypeScript interprets that entirely differently! It thinks you mean "This variable can be a single string, OR it can be an array of numbers."

By wrapping it in parentheses (string | number)[], you correctly tell the compiler: "This is an array, and every individual item inside it is allowed to be either a string or a number." This entirely eliminates the need for the dangerous any[] trap!