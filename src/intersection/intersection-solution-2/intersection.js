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
  // converting the array and values to avoid duplicated elements
  const arraySingular = [...new Set(array)];
  const valuesSingular = [...new Set(values)];
  // getting the common elements
  return arraySingular.filter((element) => valuesSingular.includes(element));
};
