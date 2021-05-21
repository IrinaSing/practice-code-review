// eslint-disable-next-line spellcheck/spell-checker
/**
 * Creates an array of values that are in the first array, but not not in the second array.
 *
 // eslint-disable-next-line max-len
 // eslint-disable-next-line max-len
 * Repeated values are not duplicated in the return value,
  and the order of result values are determined by the first array.
 *
 * **Note:** This function returns a new array, and has no side-effects.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3]); //  [1]
 *
 * @example
 *
 * difference([1, 2, 1], [2, 3]); //  [1]
 */
export const removeItems = (array = [], values = []) => {
  const newArray = []; // I describe newArray to avoid side-effects

  array.forEach((el) => {
    if (!values.includes(el)) {
      if (!newArray.includes(el)) {
        newArray.push(el);
      }
    }
  });
  return newArray;
};
