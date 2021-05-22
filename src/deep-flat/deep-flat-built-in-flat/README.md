# Deep-flat: use a built-in array method

<!-- BEGIN DOCS -->

<a name="deepFlat"></a>

## deepFlat ⇒ <code>Array</code>

Converts a nested array into a single array with no nesting.
Flattens array with any depth.
Returns a new array and there are no side-effects.

**Returns**: <code>Array</code> - - The new flattened array.

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

> Docs generated: Sat May 22 2021, 12:17:02 PM

<!-- END DOCS -->

---

## Strategy

To use a built-in array method that flattens array of any depth. It's a short solution of the challenge.

---

## Implementation

- Create a new array to avoid side-effects.
- Use `Array.flat()` method to flatten the old array. As far as we want to flatten array
  of any depth, we specify 'Infinity' as a parameter.
- Assign result to the newArray.
- Return the new array.

---

## Use Cases

This function could be used in a shopping list application. When a user who is going
shopping for grocery receives lists from every family member, the program integrates
items into global shopping list.

```js
const forBob = [["bananas", "melon"], ["tea"]];
const forJane = [["tomatoes", "cucumber"], ["cola"], ["snack"]];
const forMary = [["milk"], ["apples"]];
const shopList = [forBob, forJane, forMary];

console.log(deepFlat(shopList)); // ["bananas", "melon", "tea", "tomatoes", "cucumber", "cola", "snack", "milk", "apples"]
```

---

## Inspiration

- [Array.flat();](https://www.samanthaming.com/tidbits/71-how-to-flatten-array-using-array-flat/)

- [Determine depth of array](https://codegolf.stackexchange.com/questions/71476/determine-the-depth-of-an-array)

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
