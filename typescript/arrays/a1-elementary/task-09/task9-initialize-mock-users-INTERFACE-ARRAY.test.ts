import { getMockUsers } from "./task9-initialize-mock-users-INTERFACE-ARRAY";

console.log("=====================================");
console.log("🧪 RUNNING TESTS FOR: TASK 09");
console.log("=====================================\n");

try {
    const result = getMockUsers();
    
    console.log(`Expected Output: Array of 2 User objects`);
    console.log(`Your Output:     `, result);
    
    // Evaluate the result
    if (!Array.isArray(result)) {
        console.log("\n❌ FAIL: You did not return an array.");
    } else if (result.length !== 2) {
        console.log(`\n❌ FAIL: Expected exactly 2 users, but got ${result.length}.`);
    } else {
        // Runtime check to verify the objects match the interface shape
        const isValid = result.every(user => 
            typeof user === 'object' && 
            user !== null && 
            typeof user.id === 'number' && 
            typeof user.name === 'string'
        );

        if (isValid) {
            console.log("\n✅ PASS: You successfully returned an array of strongly-typed User objects!");
            console.log("💡 Note: Your interface prevented you from adding invalid properties like 'age' or missing the 'id'.");
        } else {
            console.log("\n❌ FAIL: One or more objects in your array do not match the required User interface (missing id/name or wrong data types).");
        }
    }
} catch (error) {
    console.error("\n❌ FAIL: Your code threw an error.", error);
}