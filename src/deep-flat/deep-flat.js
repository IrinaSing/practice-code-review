/**
 * Converts a nested array into a single array with no nesting
 *
 * It returns a new array and there are no side-effects
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
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

/*
 */

export const deepFlat = (array = []) => {
    const newArray = array.flat(Infinity);
  };
  
  export const sortNumbers = (arrOfNumbers = []) => {
    // create a copy of the argument to avoid side-effects
    const copiedAndSorted = [...arrOfNumbers];
  
    // sort the elements in the copied array
    copiedAndSorted.sort((a, b) => a - b);
  
    // return the copied & sorted array of numbers
    return copiedAndSorted;
  };
  