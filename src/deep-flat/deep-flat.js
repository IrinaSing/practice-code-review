/**
 * Converts a nested array into a single array with no nesting.
 * Flattens array with any depth.
 * Returns a new array and there are no side-effects.
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
Strategy
Create a new array to avoid side-effects;
Use .flat() method to flatten the old array. As far as we want to flatten array
of any depth, we specofy 'Infinity' as a parameter.
Assign result to the newArray.
Return new array.
 */

export const deepFlat = (array = []) => {    
    const newArray = array.flat(Infinity);
    return newArray;
  };
  

  