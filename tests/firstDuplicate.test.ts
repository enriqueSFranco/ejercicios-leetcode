import { describe, it, expect } from 'vitest'
import { firstDuplicate } from '../src/firstDuplicate'

describe('Primer Duplicado', () => {
  it('Debería encontrar el primer número duplicado con segunda ocurrencia mínima', () => {
    const input = [2, 1, 3, 5, 3, 2]
    const output = 3
    const fn = firstDuplicate(input)
    expect(fn).toBe(output)
  })

  it('Debería retornar -1 cuando no hay números duplicado', () => {
    const input = [2, 4, 3, 5, 1]
    const output = -1
    const fn = firstDuplicate(input)
    expect(fn).toBe(output)
  })

  it('Debería encontrar el número duplicado más pequeño con segunda ocurrencia mínima cuando todos los números son duplicados', () => {
    const input = [1, 1, 2, 2, 1]
    const output = 1
    const fn = firstDuplicate(input)
    expect(fn).toBe(output)
  })

  it('Debería retornar -1 cuando no hay números duplicados', () => {
    const input = [10, 6, 8, 4, 9, 1, 7, 2, 5, 3]
    const output = -1
    const fn = firstDuplicate(input)
    expect(fn).toBe(output)
  })

  it('Debería encontrar el número duplicado cuando todos los números son iguales', () => {
    const input = [3, 3, 3]
    const output = 3
    const fn = firstDuplicate(input)
    expect(fn).toBe(output)
  })
})