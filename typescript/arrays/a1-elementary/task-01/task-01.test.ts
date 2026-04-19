// 1. Import the student's code from the other file
import { getEmptyTestRegistry } from "./task-01";

// 2. Run the Unit Tests
console.log("=====================================");
console.log("🧪 RUNNING TESTS FOR: TASK 01");
console.log("=====================================\n");

try {
    // Execute the imported function
    const result = getEmptyTestRegistry();
    
    console.log(`Expected Output: []`);
    console.log(`Your Output:     `, result);
    
    // Evaluate the result
    if (Array.isArray(result) && result.length === 0) {
        console.log("\n✅ PASS: You successfully returned an initialized empty array!");
    } else {
        console.log("\n❌ FAIL: Did you return an initialized array?");
    }
} catch (error) {
    console.error("\n❌ FAIL: Your code threw an error.", error);
}