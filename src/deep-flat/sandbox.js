import { deepFlat } from "./deep-flat.js";

//test for no side-effects
const anArray = [0, [1, -1, 2], -2];  
console.log(deepFlat(anArray) !== anArray); //true, returns a new array
console.log(anArray); //[0, [1, -1, 2], -2]

//function does not work with argument types other than array.

const notArray = {'f': 7, "s": 8};//object
console.log(deepFlat(notArray)); // TypeError: array.flat is not a function.

const string = "Cat";//strings
console.log(deepFlat(string)); // TypeError: array.flat is not a function.