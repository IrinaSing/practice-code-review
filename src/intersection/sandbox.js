import { intersection } from './intersection.js';

/*
anything goes in this file, it's yours to make mistakes and be messy,
you don't need to lint this file, it's only for you,
but formatting the sandbox can make things easier to read

you can do any experiments you like to explore or debug your function
the .spec.js file is for tests and final validation only, not experiments
the main file should include only the exported function and jsdoc string
*/

console.log(intersection(['a', null, 1, Infinity], [1, 2, 'a']));
// ['a', 1]

console.log(intersection([1, 2, 3], [2, 3, 4]));
// [2, 3]