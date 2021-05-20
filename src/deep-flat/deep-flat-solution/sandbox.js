import { deepFlat } from "./deep-flat.js";

// test for no side-effects
const anArray = [0, [1, -1, 2], -2];
console.log(deepFlat(anArray) !== anArray); // true, returns a new array
console.log(anArray); // [0, [1, -1, 2], -2]

const forBob = [["bananas", "melon"], ["tea"]];
const foeJane = [["tomatoes", "cucumber"], ["cola"], ["snack"]];
const forMary = [["milk"], ["apples"]];
const shopList = [forBob, foeJane, forMary];

console.log(deepFlat(shopList)); // ["bananas", "melon", "tea", "tomatoes", "cucumber", "cola", "snack", "milk", "apples"]
