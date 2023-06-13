// https://leetcode.com/problems/valid-anagram/

export const isAnagram = (s: string, t: string): boolean => {
  // s = anagrama t = nagaram
  if (s.length !== t.length) return false

  const count = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++
    count[t.charCodeAt(i) - 97]--
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) {
      return false
    }
  }
  return true
}

/* export const isAnagram = (s: string, t: string): boolean => {
  // s = anagrama t = nagaram
  if (s.length !== t.length) return false

  const map: Record<string, number> = {}

  for (const letter of s) {
    if (map.hasOwnProperty(letter)) {
      map[letter]++
    } else {
      map[letter] = 1
    }
  }

  for (const letter of t) {
    if (Object.keys(map).includes(letter)) {
      map[letter]--
    }
  }
  const values: number[] = Object.values(map)
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 0) return false
  }
  return true
} */
