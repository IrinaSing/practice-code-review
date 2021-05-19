# Deep-flat: use a built-in array method

<!-- BEGIN DOCS -->

<a name="deepFlat"></a>

## deepFlat ⇒ <code>Array</code>

Converts a nested array into a single array with no nesting.
Flattens array with any depth.
Returns a new array and there are no side-effects.

**Returns**: <code>Array</code> - Returns the new flattened array.

| Param   | Type               | Default         | Description           |
| ------- | ------------------ | --------------- | --------------------- |
| [array] | <code>Array</code> | <code>[]</code> | The array to flatten. |

**Example**

```js
deepFlat([1, [2, [3, [4]], 5]]);
// -> [1, 2, 3, 4, 5]
```

**Example**

```js
deepFlat(["a", ["b", [["c"], ["d"]], "e"]]);
// -> ['a', 'b', 'c', 'd', 'e']
```

> Docs generated: Wed May 19 2021, 8:28:48 PM

<!-- END DOCS -->

---

## Strategy

To use a method that flattens array of any depth.

---

## Implementation

- Create a new array to avoid side-effects.
- Use `Array.flat()` method to flatten the old array. As far as we want to flatten array
  of any depth, we specify 'Infinity' as a parameter.
- Assign result to the newArray.
- Return the new array.

---

## Use Cases

---

## Inspiration

- [Array.flat();](https://www.samanthaming.com/tidbits/71-how-to-flatten-array-using-array-flat/)

- [Determine depth of array](https://codegolf.stackexchange.com/questions/71476/determine-the-depth-of-an-array)

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
