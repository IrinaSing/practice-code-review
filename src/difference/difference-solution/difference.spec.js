/* eslint-disable spellcheck/spell-checker */
import { removeItems } from './difference.js';

describe('removes specific values from an array', () => {
  describe('removes positive numbers', () => {
    it('whole numbers', () => {
      const expected = [1];
      const received = removeItems([1, 2, 3], [2, 3]);
      expect(received).toEqual(expected);
    });
    it('repeated values', () => {
      const expected = [1];
      const received = removeItems([1, 1, 3], [2, 3]);
      expect(received).toEqual(expected);
    });

    it('decimal numbers', () => {
      const expected = [1.3, 5, 2];
      const received = removeItems([1.3, 5, 2], [5.2, 6.7]);
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const expected = [];
      const received = removeItems([2.4, 6], [2.4, 6, 7]);
      expect(received).toEqual(expected);
    });
  });

  describe('numbers and string values', () => {
    it('only string values', () => {
      const expected = ['b'];
      const received = removeItems(['a', 'b'], ['a', 'c', 'd']);
      expect(received).toEqual(expected);
    });
    it('mix values string and numbers', () => {
      const expected = [3, '23'];
      const received = removeItems(['a', 3, '23'], ['a', 4, 'c', 'd']);
      expect(received).toEqual(expected);
    });
  });
  describe('null,empty and undefine values', () => {
    it('empty values in second array', () => {
      const expected = ['a', 1];
      const received = removeItems(['a', 1], []);
      expect(received).toEqual(expected);
    });
    it('null value', () => {
      const expected = ['23'];
      const received = removeItems([null, null, '23'], [null, 4, 'c', 'd']);
      expect(received).toEqual(expected);
    });
    it('undefined value', () => {
      const expected = [undefined, '23'];
      const received = removeItems([undefined, 2, '23'], ['null', 2, 'c', 'd']);
      expect(received).toEqual(expected);
    });
  });

  describe('removes negative numbers', () => {
    it('whole numbers', () => {
      const expected = [-3, -6];
      const received = removeItems([-3, -4, -6], [-4, -8, -7]);
      expect(received).toEqual(expected);
    });
    it('decimal numbers', () => {
      const expected = [-1.3, -5, 2];
      const received = removeItems([-1.3, -5, 2], [-5.2, -6.7]);
      expect(received).toEqual(expected);
    });
    it('mixed whole and decimal numbers', () => {
      const expected = [];
      const received = removeItems([-2.4, -6], [-2.4, -6, -7]);
      expect(received).toEqual(expected);
    });
  });
  describe('has no side-effects', () => {
    it('returns a new array', () => {
      const arg = [];
      const returned = removeItems(arg);
      const areDifferent = arg !== returned;
      expect(areDifferent).toEqual(true);
    });
    it('does not modify the argument', () => {
      const arg = [3, 2, 1];
      removeItems(arg);
      expect(arg).toEqual([3, 2, 1]);
    });
  });
});
