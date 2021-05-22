/**
 * Creates an array of values that are in both the first and the second arrays.
 *
 * Repeated values are not duplicated in the return value,
 * and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array = []] - The array to inspect.
 * @param {Array} [values = []] - The values to compare with the array.
 * @returns {Array} Returns the new array of filtered values.
 *
 * @example
 * intersection([2, 1], [2, 3]) --> [2]
 *
 * @example
 * intersection([2, 1, 2], [2, 3]) --> [2]
 *
 */

export const intersection = (array = [], values = []) => {
  // create an empty array for the return
  const commonItem = [];
  // loop for the elements of the array to inspect
  for (const item of array) {
    // look for the matches
    if (values.includes(item)) {
      // add the matches to the empty array
      commonItem.push(item);
    }
  }
  // avoiding repeating elements in the resulting array
  return Array.from(new Set(commonItem));
};
