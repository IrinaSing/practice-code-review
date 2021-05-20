# Intersection: use 'for/of' loop and 'if' statement combined with array methods

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

---

## Strategy

'for/of' loop and 'if' statement combined with array methods

## Implementation

- To find the intersection of two arrays - the common elements in each array - an empty array is declared.

- By using 'for/of' loop, every element of the first array is inspected. Then 'if' statement and 'includes()' method is used in the loop to check for the elements that second array has in common. And then the result is added to the empty array by using 'push()' method.

- This will return an array of common elements which are in both of the arrays, but it also returns the repeated values.

- To have an array with unique values, the resulting array is first converted to a set by using "new Set()' method. Then it is reconverted to an array by using 'Array.from()' method.

## Use Cases

This function can be used for finding the common friends of two people and suggesting their friends if they want to be friends with these common friends.

```JS
const user1 = ['Arthur', 'Liam', 'Louise'];
const user2 = ['Louise', 'Lucas', 'Oscar'];

const commonFriends = intersection (user1, user2);
```

## Inspiration

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) inspired me about the repeating values.

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) inspired me about converting a set to an array.
