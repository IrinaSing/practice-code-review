# Intersection: use built-in methods

```js
/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value, and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
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
---

## Strategy

filter() built-in method is used.

## Implementation

- 

## Use Cases

This function can be used for finding the common friends of two people and suggesting their friends if they want to be friends with these common friends.

```JS
const user1 = ['Arthur', 'Liam', 'Louise'];
const user2 = ['Louise', 'Lucas', 'Oscar'];

const commonFriends = intersection (user1, user2);
```

## Inspiration

[Alvaro Saburido](https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848) and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) inspired me about the filter() method.

[InterviewNest](https://www.youtube.com/watch?v=dvPybpgk5Y4&t=3s) inspired me about repeating values.
