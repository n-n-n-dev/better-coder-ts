import { getSupportedBrowsers } from "./task-03-seed-supported-browsers";

console.log("=====================================");
console.log("🧪 RUNNING TESTS FOR: TASK 03");
console.log("=====================================\n");

try {
    const result = getSupportedBrowsers();
    
    console.log(`Expected Output: [ 'chromium', 'firefox', 'webkit' ]`);
    console.log(`Your Output:     `, result);
    
    // Evaluate the result
    if (!Array.isArray(result)) {
        console.log("\n❌ FAIL: You did not return an array.");
    } else if (result.length !== 3) {
        console.log(`\n❌ FAIL: Expected exactly 3 items, but got ${result.length}.`);
    } else if (
        result.includes("chromium") && 
        result.includes("firefox") && 
        result.includes("webkit")
    ) {
        console.log("\n✅ PASS: You successfully returned the pre-filled browser array!");
    } else {
        console.log("\n❌ FAIL: The array is missing one or more required browser strings, or there is a typo.");
    }
} catch (error) {
    console.error("\n❌ FAIL: Your code threw an error.", error);
}