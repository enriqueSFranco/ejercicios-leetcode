function countOccurrences(s: string): Map<string, number> {
  const occurrences: Map<string, number> = new Map<string, number>()
  for (const letter of s) {
    if (occurrences.has(letter)) occurrences.set(letter, Number(occurrences.get(letter)) + 1)
    else occurrences.set(letter, 1)
  }
  return occurrences
}

export function firstNotRepeatingCharacter(s: string): string {
  const occurrencesMap = countOccurrences(s)

  for (const letter of s) {
    if (occurrencesMap.get(letter) === 1) {
      return letter
    }
  }
  return '_'
}
