import { deepFlat } from "./deep-flat.js";

// testing use case
const forBob = [["bananas", "melon"], ["tea"]];
const forJane = [["tomatoes", "cucumber"], ["cola"], ["snack"]];
const forMary = [["milk"], ["apples"]];
const shopList = [forBob, forJane, forMary];

console.log(deepFlat(shopList)); // ["bananas", "melon", "tea", "tomatoes", "cucumber", "cola", "snack", "milk", "apples"]
