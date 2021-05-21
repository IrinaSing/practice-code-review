import { removeItems } from './difference.js';

const arr1 = [2, 3, 4, 5];
const arr2 = [3, 4, 6, 8];
const arr3 = removeItems(arr1, arr2);
console.log(arr3);
