export function getEmptyTestRegistry(): string[] {
 
    let testTags = new Array();

    return testTags;
}

/*
Errors
String[] vs string[]: In TypeScript, you should almost always use the lowercase string for the primitive type. 
The uppercase String refers to the JavaScript object wrapper, 
which can cause unexpected type mismatch errors in your code later on.

new Array[...]: You combined the new Array constructor 
ith array literal brackets []. If you use the new Array constructor, it requires parentheses ().
 However, skipping the constructor and just using the array literal syntax [] is the standard and preferred way to do this in TypeScript.

The Solutions
Option 1: The Array Literal (Recommended)
This is the cleanest, most common, and preferred way to initialize an array in TypeScript.

TypeScript
let testTags: string[] = ['regression', 'smoke', 'e2e'];
Option 2: The Generic Array Type
If you prefer seeing the Array keyword for readability, use the generic syntax. You still assign it using the literal brackets.

TypeScript
let testTags: Array<string> = ['regression', 'smoke', 'e2e'];
Option 3: The Constructor (Not Recommended)
If you absolutely must use the new Array constructor, you need to use parentheses () instead of square brackets.

TypeScript
let testTags: string[] = new Array('regression', 'smoke', 'e2e');
*/