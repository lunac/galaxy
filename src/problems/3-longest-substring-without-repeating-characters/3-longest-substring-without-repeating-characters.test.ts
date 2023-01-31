import { lengthOfLongestSubstring } from "./3-longest-substring-without-repeating-characters";
describe("given tests", () => {
  test("given tests 1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  });
  test("given tests 2", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  });
  test("given tests 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });
  test("given tests 4", () => {
    expect(lengthOfLongestSubstring("au")).toEqual(3);
  });
});
