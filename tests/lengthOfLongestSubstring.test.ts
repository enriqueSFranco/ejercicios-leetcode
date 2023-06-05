import { describe, it, expect } from 'vitest'
import { lengthOfLongestSubstring } from '../src/lengthOfLongestSubstring'

describe('lengthOfLongestSubstring', () => {
  it('Devolver cero si es una cadena vacia', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
  })

  it('Devolver la longitud correcta de la subcadena más larga', () => {
    expect(lengthOfLongestSubstring('abcd')).toBe(4)
    expect(lengthOfLongestSubstring('aabbcdef')).toBe(5)
    expect(lengthOfLongestSubstring('ddddd')).toBe(1)
  })
})
