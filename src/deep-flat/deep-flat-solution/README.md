# Deep-flat: use a built-in array method

<!-- BEGIN DOCS -->

> Docs generated: Wed May 19 2021, 8:21:05 PM

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
