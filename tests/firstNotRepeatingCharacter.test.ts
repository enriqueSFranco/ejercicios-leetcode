import { describe, it, expect } from 'vitest'
import { firstNotRepeatingCharacter } from '../src/firstNotRepeatingCharacter'

describe('first Not Repeating Character', () => {
  it('Debería devolver el primer carácter no repetido', () => {
    const input = 'abcbabad'
    const output = 'c'
    const fn = firstNotRepeatingCharacter(input)
    expect(fn).toBe(output)
  })

  it('Debería devolver "_" cuando no hay carácteres no repetidos', () => {
    const input = 'aabbcc'
    const output = '_'
    const fn = firstNotRepeatingCharacter(input)
    expect(fn).toBe(output)
  })

  it('Debería devolver "_" cuando no hay carácteres no repetidos', () => {
    const input = 'abcdefghijaklmnopqrstuvwxyzabcdefghijaklmnopqrstuvwxyz'
    const output = '_'
    const result = firstNotRepeatingCharacter(input)
    expect(result).toBe(output)
  })
})
