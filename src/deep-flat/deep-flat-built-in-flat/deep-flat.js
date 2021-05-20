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
  // An old array flattened with method assigned to the new array.
  const newArray = array.flat(Infinity);
  // Return the new flattened array.
  return newArray;
};
