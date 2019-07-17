# JS-Challenge--Diffing-an-Object
Ever wonder how tools like `git` parse your source code and determine what you've added and subtracted from the last commit?

Today we're going to build our own diffing tool to compare JavaScript objects full of fruit data!

### Diffing an Object ###
Given JavaScript objects like this:

```js

let newCode = {
   apples: 3, 
   oranges: 4
};

let oldCode = {
   apples: 3, 
   grapes: 5
};

```

Create a function that returns an array of containing the object diff like the:
```js

diff(newCode, oldCode);

//returns: 
// [
//     ['-', 'grapes', 5],
//     ['+', 'oranges',4]
// ]

```
