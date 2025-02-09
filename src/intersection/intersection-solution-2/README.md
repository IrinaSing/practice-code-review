# Intersection: use built-in methods

<!-- BEGIN DOCS -->

<a name="intersection"></a>

## intersection ⇒ <code>Array</code>

Creates an array of values that are in both the first and the second arrays.

Repeated values are not duplicated in the return value,
and the order of result values are determined by the first array.

**Note:** This function returns a new array, and has no side-effects.

**Returns**: <code>Array</code> - Returns the new array of filtered values.

| Param    | Type               | Default         | Description                           |
| -------- | ------------------ | --------------- | ------------------------------------- |
| [array]  | <code>Array</code> | <code>[]</code> | The array to inspect.                 |
| [values] | <code>Array</code> | <code>[]</code> | The values to compare with the array. |

**Example**

```js
intersection([2, 1], [2, 3])-- > [2];
```

**Example**

```js
intersection([2, 1, 2], [2, 3])-- > [2];
```

> Docs generated: Sat May 22 2021, 10:51:27 AM

<!-- END DOCS -->

---

## Strategy

filter() built-in method is used.

## Implementation

- Singularize and copy the arrays for the unique elements by using '[...arr]' and 'new Set()' methods
- Search for the common elements by using 'filter()' and 'includes()' methods

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
