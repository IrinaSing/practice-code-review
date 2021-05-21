# Deep-flat: recursion

<!-- BEGIN DOCS -->

<!-- END DOCS -->

---

## Strategy

The method of recursion is very effective for this challenge, because it flattens an array of any depth.

## Implementation

- `Array.forEach` - method executes a provided function once for each array element.
- `if-else loop` - with condition `Array.isArray` checks if the element of the array is an array. If yes - it recuresively calls the function (until it will come across content that is not an array). The result of this recursive call will eventually be pushed to the result array.
- `(...arr)` - spread operator allows us to grab all the elements within the array element (el) (sins it is an array too) and place them into our first function call’s result array. If we tried to do this without the spread operator, we’d end up with another nested array.
- `.push` - method that places element into new array.

## Use Cases

```js
const forBob = [["bananas", "melon"], ["tea"]];
const forJane = [["tomatoes", "cucumber"], ["cola"], ["snack"]];
const forMary = [["milk"], ["apples"]];
const shopList = [forBob, forJane, forMary];

console.log(deepFlat(shopList)); // ["bananas", "melon", "tea", "tomatoes", "cucumber", "cola", "snack", "milk", "apples"]
```

---

## Inspiration

[Flatten array with recursion](https://medium.com/@mccarthyd/what-happens-when-you-flatten-an-array-using-recursion-da2954deece9)

<!--
  was there any code, blog post, video, ... that inspired your solution?
  there's nothing wrong with adapting other people's code, just give them credit!
  and say how it inspired your solution.
-->
