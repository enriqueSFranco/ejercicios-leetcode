// 3 Longest Substring Without Repeating Characters
export const lengthOfLongestSubstring = (s: string): number => {
  if (s.length === 0) return 0

  let left = 0
  let right = 0
  let maxLen = 0
  const seen: Set<string> = new Set<string>()

  while (right < s.length) {
    if (seen.has(s[right])) {
      maxLen = Math.max(maxLen, right - left)
      seen.delete(s[left])
      left++
    } else {
      seen.add(s[right])
      right++
    }
  }
  maxLen = Math.max(maxLen, right - left)
  return maxLen
}
