import { intersection } from './intersection.js';

describe('intersection creates an array of values that are in both the first and the second arrays.', () => {
  describe('intersects empty arrays', () => {
    it('first array is an empty array', () => {
      const actual = intersection([], [1, 2, 3]);
      const expected = [];
      expect(actual).toEqual(expected);
    });
    it('second array is an empty array', () => {
      const actual = intersection([1, 2, 3], []);
      const expected = [];
      expect(actual).toEqual(expected);
    });
    it('both of the arrays are empty arrays', () => {
      const actual = intersection([], []);
      const expected = [];
      expect(actual).toEqual(expected);
    });
  });
  describe('intersects different type of elements in the arrays', () => {
    it('mixed types', () => {
      const actual = intersection([1, 2, 3], [2, 3, 4]);
      const expected = [2, 3];
      expect(actual).toEqual(expected);
    });
    it('mixed types', () => {
      const actual = intersection(
        [1, 'a', 'A', null, Infinity, 2],
        ['a', null, 'B'],
      );
      const expected = ['a', null];
      expect(actual).toEqual(expected);
    });
    it('mixed types and repeating elements in the first array', () => {
      const actual = intersection([1, 'a', 2, null, 1], [2, 1, Infinity]);
      const expected = [1, 2];
      expect(actual).toEqual(expected);
    });
    it('mixed types and repeating elements in the second array', () => {
      const actual = intersection(
        ['a', Infinity, 2, 1, NaN],
        [2, 2, null, 'a', 'A', Infinity],
      );
      const expected = ['a', Infinity, 2];
      expect(actual).toEqual(expected);
    });
  });
  describe('order of the elements matter', () => {
    it('first array has the least index number in common', () => {
      const actual = intersection([1, 2, 3], [4, 5, 1]);
      const expected = [1];
      expect(actual).toEqual(expected);
    });
    it('second array has the least index number in common', () => {
      const actual = intersection([4, 5, 6, 'a'], ['a', 6, 1, 2]);
      const expected = [6, 'a'];
      expect(actual).toEqual(expected);
    });
  });
  describe('length of the elements matter', () => {
    it('first array has a longer length', () => {
      const actual = intersection([1, 2, 3, 5], [1]);
      const expected = [1];
      expect(actual).toEqual(expected);
    });
    it('second array has a longer length', () => {
      const actual = intersection([1], [2, 3, 4, 5, 'a', 1, 2]);
      const expected = [1];
      expect(actual).toEqual(expected);
    });
    it('both arrays have the same length', () => {
      const actual = intersection([1, NaN, 5, 7], [NaN, 'a', null, 7]);
      const expected = [NaN, 7];
      expect(actual).toEqual(expected);
    });
  });
  describe('has no side-effects', () => {
    it('returns a new array', () => {
      const arg1 = [1, 2, 3];
      const arg2 = [3, 2, 1];
      const returned = intersection(arg1, arg2);
      const areDifferent = arg1 !== returned;
      expect(areDifferent).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg1 = [1, 2, 3];
      const arg2 = [3, 4, 5];
      intersection(arg1, arg2);
      expect(arg1).toEqual([1, 2, 3]);
    });
  });
});