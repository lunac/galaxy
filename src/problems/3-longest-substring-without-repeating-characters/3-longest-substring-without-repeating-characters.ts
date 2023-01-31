/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length <= 1) return s.length;
  let pivot = 0,
    max = 0,
    look = 0;
  const map = new Map();
  while (look < s.length) {
    const char = s.charAt(look);
    if (map.has(char)) {
      max = Math.max(map.size, max);
      map.clear();
      pivot++;
      look = pivot;
    } else {
      map.set(char, true);
      look++;
    }
  }
  return Math.max(map.size, max);
}
// @lc code=end

export { lengthOfLongestSubstring };
