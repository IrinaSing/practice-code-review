/**
 * Converts a nested array into a single array with no nesting.
 * Flattens array with any depth.
 * Returns a new array and there are no side-effects.
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} - The new flattened array.
 * @example
 *
 * deepFlat([1, [2, [3, [4]], 5]]);
 * // -> [1, 2, 3, 4, 5]
 *
 * @example
 *
 * deepFlat(['a', ['b', [['c'], ['d']], 'e']]);
 * // -> ['a', 'b', 'c', 'd', 'e']
 */

export const deepFlat = (array = []) => {
  // Create a new array to avoid side-effects.
  const flattened = [];
  // Iterate through the original array.
  array.forEach((el) => {
    // Create a recursion and push elements to the new array once they fit requirements.
    // Check element for being an array.
    if (Array.isArray(el)) {
      // Using the spread operator to push the result of the recursive call into our result array.
      flattened.push(...deepFlat(el));
    } else {
      // Push element into result array if it is not an array.
      flattened.push(el);
    }
  });
  // Return the new flattened array.
  return flattened;
};
