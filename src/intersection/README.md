# Intersection: use 'for' loop and 'if' statement combined with array methods

## Docstring

```JS
/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array = []] - The array to inspect.
 * @param {Array} [values = []] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 *
 * @example
 * difference([2, 1], [2, 3]);
 * --> [2]
 *
 * @example
 * difference([2, 1, 2], [2, 3]);
 * --> [2]
 */
```

> Docstring is adapted from [lodash's intersection](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7498)

---

## Strategy

I chose to use 'for' loop and 'if' statement combined with array methods to solve this challenge, because it is easy to read the code.


