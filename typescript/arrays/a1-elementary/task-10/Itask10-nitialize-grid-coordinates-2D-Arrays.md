# Problem 10: Initialize Grid Coordinates (2D Arrays)

**Difficulty:** 🟡 Medium (A1)  
**Concept:** Multi-Dimensional Arrays (`Type[][]`)  

We have officially reached a massive milestone: Multi-Dimensional Arrays (2D Arrays).

In Playwright automation, you will constantly deal with HTML <table> elements, data grids, or spreadsheets. A 2D array (an array where every item inside it is another array) is exactly how we map those UI tables into memory. Mastering number[][] now will make the classical "Magic Matrix" problems in A2 feel incredibly easy.

## 📝 Description
You are automating a test for an interactive canvas map where users can drop pins on an X/Y grid. Your test needs a predefined set of coordinates to use as test data. 

Your task is to write a function that returns a two-dimensional array (a matrix). Each inner array represents an [X, Y] coordinate pair.

## ⚠️ Constraints
* The function must return an array of arrays.
* The structure must be strictly typed as a 2D number array: `number[][]`.
* You **cannot** use the `any` keyword.
* The array must contain exactly these three coordinate pairs in this order: `[0, 1]`, `[2, 3]`, and `[4, 5]`.

## 💡 Example Output
```text
Output: [ [0, 1], [2, 3], [4, 5] ]
Type Check: Validates strictly as number[][]
```