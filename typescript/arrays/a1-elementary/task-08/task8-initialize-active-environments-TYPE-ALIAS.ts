/**
 * Task 8: Initialize Active Environments
 * Read the requirements in task-08.md
 */

// TODO 1: Create a custom Type Alias named 'Environment' 
// that strictly accepts ONLY the strings: "DEV", "QA", or "PROD".
//export type Environment = /* Your code here */;

export type Environment = 'DEV' | 'QA' | 'PROD';

// TODO 2: Strictly type the return of this function to be an array of your custom Environment type.
export function getActiveEnvironments() {
    // TODO 3: Return an array containing exactly "DEV" and "QA".
    let activeEnviroments: Environment[] = [ 'DEV','QA'];
    
    return activeEnviroments;    
}