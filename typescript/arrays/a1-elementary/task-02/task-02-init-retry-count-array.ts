 
/**
 * Task 2: Initialize Retry Counts (Generic Syntax)
 * Read the requirements in task-02.md
 */

export function getRetryCounts(): Array<number> {
    // TODO: Declare, strictly type (using Array<number>), 
    // and initialize an empty array of numbers.
    let testRetryCount: Array<number> = [];
    
    // Return that array.
    return testRetryCount;
    
    
}

/*

Common sytax traps

EXAMPLE:  let testRetryCount: [] = new Array<number>;

The Type Annotation: When you write let testRetryCount: [], 
you are telling TypeScript that this variable is an empty tuple 
— an array that is strictly locked to having exactly zero items forever. 

Since the instructions ask for the generic syntax, 
we need to change the type to Array<number>.

***
The Initialization: Just like in the first task, 
while you can use the new Array<number>() constructor 
(don't forget the parentheses if you do!), 
it is much cleaner and more standard to initialize it with an empty array literal [].

***
The Return Statement: 
The function signature promises to return an Array<number>, 
but right now it doesn't return anything.
We need to explicitly return the variable.
*/