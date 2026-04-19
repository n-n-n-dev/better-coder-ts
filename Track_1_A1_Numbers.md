# A1 - The Atoms: Track 1 (Initialization & Strict Typing)

### 🚀 Goal: Muscle Memory for Declarations
In this track, you will never write logic. You are simply declaring variables, enforcing strict types, and learning the difference between empty arrays, populated arrays, and mixed arrays. **Do not use `any`.**

* **Task 1: The Empty String Array**
    * **Objective:** Declare a constant named `testNames`. Strictly type it as an array of strings. Initialize it as an empty array.
    * **Signature:** `const testNames: string[] = ...`
* **Task 2: The Empty Number Array (Generic Syntax)**
    * **Objective:** Declare a constant named `retryCounts`. Strictly type it using the generic syntax (`Array<T>`). Initialize it as an empty array.
* **Task 3: The Pre-filled String Array**
    * **Objective:** Declare `supportedBrowsers` as an array of strings. Initialize it with "chrome", "firefox", and "webkit".
* **Task 4: The Pre-filled Number Array**
    * **Objective:** Declare `httpStatusCodes` as an array of numbers. Initialize it with 200, 201, 400, 404, and 500.
* **Task 5: The Boolean Flags**
    * **Objective:** Declare `featureFlags` as an array of booleans. Initialize it with `true`, `false`, `true`.
* **Task 6: The Union Type Array (Strings OR Numbers)**
    * **Objective:** Declare `mixedData`. Strictly type it so it can hold *either* strings or numbers. Initialize it with `[101, "Error", 200, "Success"]`.
* **Task 7: The Union Type Array (Strings OR Booleans)**
    * **Objective:** Declare `validationResults`. Type it to hold strings or booleans. Initialize with `["Test Passed", true, "Test Failed", false]`.
* **Task 8: The Type Alias Array**
    * **Objective:** Create a `type Environment = "DEV" | "QA" | "PROD"`. Then declare an array `activeEnvs` strictly typed to hold only those specific strings. Initialize it with `["DEV", "QA"]`.
* **Task 9: The Interface Array**
    * **Objective:** Create an `interface User { id: number; name: string }`. Declare an array `mockUsers` strictly typed as an array of `User` objects. Initialize it with two objects.
* **Task 10: The Multi-Dimensional Array (Matrix)**
    * **Objective:** Declare `gridCoordinates`. Strictly type it as an array of number arrays (`number[][]`). Initialize it with `[[0, 1], [2, 3], [4, 5]]`.
* **Task 11: The String Matrix**
    * **Objective:** Declare `dataTable`. Type it as a 2D string array. Initialize it with a header row and one data row: `[["Name", "Age"], ["John", "30"]]`.
* **Task 12: The Let vs Const Reassignment**
    * **Objective:** Declare `dynamicList` using `let` (typed as `string[]`). Initialize it as `["A"]`. On the next line, reassign the entire variable to a new array `["B", "C"]`.
* **Task 13: The Undefined Trap**
    * **Objective:** Declare `pendingTests` as `string[]` but do *not* initialize it (no `= []`). On the next line, try to write `pendingTests.push("Test1")`. Hover over the error to understand why initialization is required.
* **Task 14: Array of Arrays of Strings**
    * **Objective:** Declare `nestedTags` as `Array<Array<string>>`. Initialize it with `[["tag1", "tag2"], ["tag3"]]`.
* **Task 15: The Readonly String Array**
    * **Objective:** Declare `constantLocators` as a `readonly string[]`. Initialize with `["#submit", ".cancel"]`. Try to `.push()` to it on the next line to see the TS protection in action.
* **Task 16: The Readonly Number Array (Generic)**
    * **Objective:** Declare `fixedPorts` using `ReadonlyArray<number>`. Initialize with `[80, 443]`.
* **Task 17: Implicit Typing Check**
    * **Objective:** Declare `implicitNames = ["Alice", "Bob"]` without writing the type. Hover over `implicitNames` to verify TypeScript successfully inferred it as `string[]`.
* **Task 18: Implicit Union Check**
    * **Objective:** Declare `implicitMixed = ["Alice", 100]`. Hover over it to see how TS inferred `(string | number)[]`.
* **Task 19: The As Const Lockdown**
    * **Objective:** Declare `roles = ["Admin", "User"] as const`. Hover over it. Notice it is no longer a `string[]`, but a readonly tuple of exact literals.
* **Task 20: Array of Nullable Strings**
    * **Objective:** Declare `optionalDescriptions`. Type it so it can hold strings, OR `null`. Initialize it with `["First", null, "Third"]`.