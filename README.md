# JavaScript Semicolon Insertion Bug

This repository demonstrates a common but easily overlooked error in JavaScript: the unintended consequences of missing semicolons and how JavaScript's Automatic Semicolon Insertion (ASI) mechanism can lead to unexpected behavior.

## The Bug

The `bug.js` file contains two functions, `foo` and `bar`.  `foo` adds two numbers, and `bar` calls `foo` and doubles the result.  However, semicolons are missing at the end of the `foo` and `bar` function declarations. 

The issue arises because JavaScript's ASI attempts to correct the missing semicolons, but it doesn't always do so in the way a developer expects.  The incorrect ASI leads to a syntax error, or incorrect results.

## The Solution

The `bugSolution.js` file corrects the error by adding the missing semicolons. This ensures that the code is parsed correctly and produces the intended output.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` in a JavaScript environment (browser console, Node.js).
3. Execute the code.  You should see an error or unexpected results.
4. Open `bugSolution.js` and execute the code to see the corrected output.

## Lesson Learned

Always use semicolons to explicitly terminate statements in JavaScript. While ASI exists, relying on it can lead to unexpected behavior and errors that are difficult to debug.  Following consistent and explicit semicolon usage makes your code easier to read, understand, and maintain.