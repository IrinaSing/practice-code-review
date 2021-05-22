import { sortNumbers } from "./sort-numbers.js";

/*
  anything goes in this file, it's yours to make mistakes and be messy
    you don't need to lint this file, it's only for you
    but formatting the sandbox can make things easier to read

  you can do any experiments you like to explore or debug your function
    the .spec.js file is for tests and final validation only, not experiments
    the main file should include only the exported function and jsdoc string
*/

console.log(sortNumbers([1, 2, 3])); // [1,2,3]

const anArray = [1, 0, -1];
console.log(sortNumbers(anArray) !== anArray); // true, returns a new array
console.log(anArray); // [1, 0 , -1]

// --- strange, the default sort is alphabetical ---

const defaultSort = (arr) => {
  return [...arr].sort();
};

// would have expected this to log [-3, -2, -1]
console.log(defaultSort([-1, -2, -3])); // [-1, -2, -3], what?
