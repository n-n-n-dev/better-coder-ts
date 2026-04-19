import { getExpectedStatusCodes } from "./task4-Initialize-expected-status-codes";

console.log("=====================================");
console.log("🧪 RUNNING TESTS FOR: TASK 04");
console.log("=====================================\n");

try {
    const result = getExpectedStatusCodes();
    
    console.log(`Expected Output: [ 200, 201, 400, 404, 500 ]`);
    console.log(`Your Output:     `, result);
    
    // Evaluate the result
    if (!Array.isArray(result)) {
        console.log("\n❌ FAIL: You did not return an array.");
    } else if (result.length !== 5) {
        console.log(`\n❌ FAIL: Expected exactly 5 items, but got ${result.length}.`);
    } else if (
        result.includes(200) && 
        result.includes(201) && 
        result.includes(400) && 
        result.includes(404) && 
        result.includes(500)
    ) {
        console.log("\n✅ PASS: You successfully returned the exact status codes array!");
    } else {
        console.log("\n❌ FAIL: The array is missing one or more required status codes, or contains incorrect numbers.");
    }
} catch (error) {
    console.error("\n❌ FAIL: Your code threw an error.", error);
}