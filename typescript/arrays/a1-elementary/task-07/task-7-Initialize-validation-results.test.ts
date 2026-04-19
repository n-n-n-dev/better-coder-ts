import { getValidationResults } from "./task-7-Initialize-validation-results";

console.log("=====================================");
console.log("🧪 RUNNING TESTS FOR: TASK 07");
console.log("=====================================\n");

try {
    const result = getValidationResults();
    
    console.log(`Expected Output: [ 'Login Form Visible', true, 'Submit Button Enabled', false ]`);
    console.log(`Your Output:     `, result);
    
    // Evaluate the result
    if (!Array.isArray(result)) {
        console.log("\n❌ FAIL: You did not return an array.");
    } else if (result.length !== 4) {
        console.log(`\n❌ FAIL: Expected exactly 4 items, but got ${result.length}.`);
    } else if (
        result[0] === "Login Form Visible" && 
        result[1] === true && 
        result[2] === "Submit Button Enabled" && 
        result[3] === false
    ) {
        console.log("\n✅ PASS: You successfully returned the Mixed Union array of strings and booleans!");
    } else {
        console.log("\n❌ FAIL: The array values are incorrect or out of order.");
    }
} catch (error) {
    console.error("\n❌ FAIL: Your code threw an error.", error);
}