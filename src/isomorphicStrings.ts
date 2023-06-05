export function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false

  const set: Set<string> = new Set<string>()
  const map: Map<string, string> = new Map<string, string>()

  for (let index = 0; index < s.length; index++) {
    const charS = s[index]
    const charT = t[index]

    if (map.has(charS)) {
      if (map.get(charS) !== charT) {
        return false
      }
    } else {
      if (set.has(charT)) {
        return false
      }
      map.set(charS, charT)
      set.add(charT)
    }
  }

  return true
}
