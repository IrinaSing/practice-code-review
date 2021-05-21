# Split Object

Split an object into an array of objects. Each entry in the array will be one key/value pair from the object.

---

Here's a starter docstring for your solutions. Feel free to rewrite it if that helps you understand:

```js
/**
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * This function has no side-effects, the argument object is not modified
 *
 * @param {Object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 * @example
 *
 * splitObject({ a: 1, b: 2, c: 3 });
 * // -> [{ a: 1 }, { b: 2 }, { c: 3 }]
 *
 * @example
 *
 * splitObject({ name: 'robs', age: 25, tall: true, userName: 'sbor' });
 * // -> [{ name: 'robs }, { age: 25 }, { tall: true }, { userName: 'sbor' }]
 *
 * @example
 *
 * splitObject({});
 * // -> []
 */
```
