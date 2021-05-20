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

'for' loop and 'if' statement combined with array methods to solve this challenge is used.

## Implementation

To find the intersection of two arrays - the common elements in each array - first an empty array is declared.

Then by using 'for/of' loop, every element of the first array is inspected. Then 'if' statement and 'includes()' built-in method is used in the 'for' loop to check for the elements that second array has in common. And then the result is added to the empty array by using 'push()' built-in method.

This will return an array of common elements in both of the arrays, but it is also returns the repeated values.

To have an array with unique values, the resulting array is first converted to a set by using "new Set()' method. Then it is reconverted to an array by using 'Array.from()' built-in method.

## Use Cases

This function can be used for finding the common friends of two people and suggesting their friends if they want to be friends with these common friends.

```JS
const user1 = ['Arthur', 'Liam', 'Louise'];
const user2 = ['Louise', 'Lucas', 'Oscar'];

const commonFriends = intersection (user1, user2);
```

## Inspiration

<!-- BEGIN DOCS -->

<a name="intersection"></a>

## intersection ⇒ <code>Array</code>

Creates an array of values that are in both the first and the second arrays.

Repeated values are not duplicated in the return value,
and the order of result values are determined by the first array.

**Note:** This function returns a new array, and has no side-effects.

**Returns**: <code>Array</code> - Returns the new array of filtered values.

| Param    | Type               | Default         | Description            |
| -------- | ------------------ | --------------- | ---------------------- |
| [array]  | <code>Array</code> | <code>[]</code> | The array to inspect.  |
| [values] | <code>Array</code> | <code>[]</code> | The values to exclude. |

**Example**

```js
intersection([2, 1], [2, 3])-- > [2];
```

**Example**

```js
intersection([2, 1, 2], [2, 3])-- > [2];
```

> Docs generated: Wed May 19 2021, 9:22:48 PM

<!-- END DOCS -->
