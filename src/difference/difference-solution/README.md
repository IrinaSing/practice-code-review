# Difference: Array functions

<!-- BEGIN DOCS -->

<a name="removeItems"></a>

## removeItems ⇒ <code>Array</code>

Creates an array of values that are in the first array, but not not in the second array.

// eslint-disable-next-line max-len
// eslint-disable-next-line max-len
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
difference([2, 1], [2, 3]); //  [1]
```

**Example**

```js
difference([1, 2, 1], [2, 3]); //  [1]
```

> Docs generated: Thu May 20 2021, 6:15:23 PM

<!-- END DOCS -->

---

## Strategy

---

I used array function without any loops. Using array is more easy and readable for everyone

## Implementation

---
I prefer to use array filter to remove specific items of the array.

## Use Cases

---

```js
const arr1 = [2, 3, 4, 5];
const arr2 = [3, 4, 6, 8];
const arr3 = removeItems(arr1, arr2);
console.log(arr3);

```

## Inspiration
https://stackoverflow.com/questions/19957348/remove-all-elements-contained-in-another-array
<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
