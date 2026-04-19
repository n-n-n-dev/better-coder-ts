import { getFeatureFlags } from "./task5-initialize-feature-flags";
console.log("=====================================");
console.log("🧪 RUNNING TESTS FOR: TASK 05");
console.log("=====================================\n");

try {
    const result = getFeatureFlags();
    
    console.log(`Expected Output: [ true, false, true ]`);
    console.log(`Your Output:     `, result);
    
    // Evaluate the result
    if (!Array.isArray(result)) {
        console.log("\n❌ FAIL: You did not return an array.");
    } else if (result.length !== 3) {
        console.log(`\n❌ FAIL: Expected exactly 3 items, but got ${result.length}.`);
    } else if (
        result[0] === true && 
        result[1] === false && 
        result[2] === true
    ) {
        console.log("\n✅ PASS: You successfully returned the exact feature flags array!");
    } else {
        console.log("\n❌ FAIL: The array does not contain the correct boolean values in the correct order.");
    }
} catch (error) {
    console.error("\n❌ FAIL: Your code threw an error.", error);
}   