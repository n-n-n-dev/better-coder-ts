import { getMixedLogs } from "./task-6-Initialize-mixed-telemetry-logs";

console.log("=====================================");
console.log("🧪 RUNNING TESTS FOR: TASK 06");
console.log("=====================================\n");

try {
    const result = getMixedLogs();
    
    console.log(`Expected Output: [ 101, 'Error', 200, 'Success' ]`);
    console.log(`Your Output:     `, result);
    
    // Evaluate the result
    if (!Array.isArray(result)) {
        console.log("\n❌ FAIL: You did not return an array.");
    } else if (result.length !== 4) {
        console.log(`\n❌ FAIL: Expected exactly 4 items, but got ${result.length}.`);
    } else if (
        result[0] === 101 && 
        result[1] === "Error" && 
        result[2] === 200 && 
        result[3] === "Success"
    ) {
        console.log("\n✅ PASS: You successfully returned the Mixed Union array!");
    } else {
        console.log("\n❌ FAIL: The array values are incorrect or out of order.");
    }
} catch (error) {
    console.error("\n❌ FAIL: Your code threw an error.", error);
}