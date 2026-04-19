import { getActiveEnvironments } from "./task8-initialize-active-environments-TYPE-ALIAS";

console.log("=====================================");
console.log("🧪 RUNNING TESTS FOR: TASK 08");
console.log("=====================================\n");

try {
    const result = getActiveEnvironments();
    
    console.log(`Expected Output: [ 'DEV', 'QA' ]`);
    console.log(`Your Output:     `, result);
    
    // Evaluate the result
    if (!Array.isArray(result)) {
        console.log("\n❌ FAIL: You did not return an array.");
    } else if (result.length !== 2) {
        console.log(`\n❌ FAIL: Expected exactly 2 items, but got ${result.length}.`);
    } else if (
        result.includes("DEV") && 
        result.includes("QA")
    ) {
        console.log("\n✅ PASS: You successfully returned an array of active environments!");
        console.log("💡 Note: TypeScript statically verified your custom Environment type at compile time.");
    } else {
        console.log("\n❌ FAIL: The array is missing 'DEV' or 'QA', or contains an invalid environment.");
    }
} catch (error) {
    console.error("\n❌ FAIL: Your code threw an error.", error);
}