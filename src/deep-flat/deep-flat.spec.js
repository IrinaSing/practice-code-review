import { deepFlat } from "./deep-flat.js";

describe("flattens arrays with different levels of depths", () => {
  describe("default value, array with 1 level of depth", () => {
    it("default value", () => {
      const expected = [];
      const received = deepFlat([]);
      expect(received).toEqual(expected);
    });
    it("array with numbers", () => {
      const expected = [0, 1, -1, 2, -2];
      const received = deepFlat([0, 1, -1, 2, -2]);
      expect(received).toEqual(expected);
    });
    it("array with strings", () => {
      const expected = ["a", "b", "c", "!", "e"];
      const received = deepFlat(["a", "b", "c", "!", "e"]);
      expect(received).toEqual(expected);
    });
    it("array with different types of items", () => {
      const expected = [null, false, 0, NaN, "e"];
      const received = deepFlat([null, false, 0, NaN, "e"]);
      expect(received).toEqual(expected);
    });
  });
  describe("flattens array with 2 levels of depth", () => {
    it("array with numbers", () => {
      const expected = [0, 1, -1, 2, -2];
      const received = deepFlat([0, [1, -1, 2], -2]);
      expect(received).toEqual(expected);
    });
    it("array with strings", () => {
      const expected = ["a", "b", "c", "!", "e"];
      const received = deepFlat(["a", ["b", "c", "!"], "e"]);
      expect(received).toEqual(expected);
    });
    it("array with different types of items", () => {
      const expected = [null, false, 0, NaN, "e"];
      const received = deepFlat([null, [false], 0, NaN, "e"]);
      expect(received).toEqual(expected);
    });
  });
  describe("flattens array with 3 levels of depth", () => {
    it("array with numbers", () => {
      const expected = [5, 7, 0, 1, -1, 2, -2, 9];
      const received = deepFlat([5, 7, [0, [1, -1, 2], -2], 9]);
      expect(received).toEqual(expected);
    });
    it("array with strings", () => {
      const expected = ["a", "b", "c", "!", "e"];
      const received = deepFlat(["a", ["b", ["c", "!"]], "e"]);
      expect(received).toEqual(expected);
    });
    it("array with different types of items", () => {
      const expected = [null, false, 0, NaN, "e"];
      const received = deepFlat([true, [null, [false]], 0, NaN, "e"]);
      expect(received).toEqual(expected);
    });
  });
  describe("flattens array with 3 > levels of depth", () => {
    it("array with numbers", () => {
      const expected = [45, 253, 5, 7, 0, 1, -1, 2, -2, 9];
      const received = deepFlat([45, 253, [5, [7], [0, [1, -1, [2]], -2], 9]]);
      expect(received).toEqual(expected);
    });
    it("array with strings", () => {
      const expected = [
        "cat",
        "robot",
        "a",
        "g",
        "!?",
        "%winter",
        "u",
        "typo",
        "j",
        "aaa",
      ];
      const received = deepFlat([
        "cat",
        "robot",
        ["a", ["g"], [["!?", ["%winter"], ["u", ["typo"]]], "j"], "aaa"],
      ]);
      expect(received).toEqual(expected);
    });
  });
  describe("removes empty slot", () => {
    it("array with numbers", () => {
      const expected = [45, 253, 5, 9];
      const received = deepFlat([45, 253, [5, , 9]]);
      expect(received).toEqual(expected);
    });
  });
});
