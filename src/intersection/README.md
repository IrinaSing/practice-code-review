# Intersection

Write a function that finds all the values shared between two arrays.

---

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that helps you understand:

```js
/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to compare with the array.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]);
 * // -> [2]
 *
 * @example
 *
 * difference([2, 1, 2], [2, 3]);
 * // -> [2]
 */
```

> Docstring is adapted from [lodash's intersection](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7498)