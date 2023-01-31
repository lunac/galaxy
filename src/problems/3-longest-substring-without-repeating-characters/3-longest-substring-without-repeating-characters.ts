/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;
  let count = 0,
    start = 0,
    max = 0;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (map.has(char)) {
      const bottom = Math.max(map.get(char), start);
      max = Math.max(count, max);
      count = i - bottom;
      start = bottom;
      map.set(char, i);
    } else {
      map.set(char, i);
      count++;
    }
  }
  return Math.max(count, max);
}
// @lc code=end

export { lengthOfLongestSubstring };
