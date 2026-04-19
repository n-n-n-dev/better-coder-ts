import { getRetryCounts } from "./task-02-init-retry-count-array";

console.log("=====================================");
console.log("🧪 RUNNING TESTS FOR: TASK 02");
console.log("=====================================\n");

try {
    const result = getRetryCounts();
    
    console.log(`Expected Output: []`);
    console.log(`Your Output:     `, result);
    
    // Evaluate the result
    if (Array.isArray(result) && result.length === 0) {
        console.log("\n✅ PASS: You successfully returned an initialized empty array!");
        // Note: TypeScript handles the strict type checking at compile time. 
        // If they used string[] instead of Array<number>, their IDE will flag it before they even run this test!
    } else {
        console.log("\n❌ FAIL: Did you return an initialized array?");
    }
} catch (error) {
    console.error("\n❌ FAIL: Your code threw an error.", error);
}

/*
A Quick Note on Testing Types in TypeScript
You might notice that the test file doesn't strictly check 
if the array is specifically an Array<number> at runtime.

Why? 
Because TypeScript types disappear completely when the code runs! 
TypeScript is a static analysis tool. 
If you try to return ["hello"] or use string[] inside task-02.ts, 
the VS Code compiler will immediately throw a red squiggly line 
and ts-node will crash before the test even executes. 

The compiler itself is your first line of defense!
*/