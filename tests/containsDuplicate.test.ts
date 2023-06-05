import { describe, it, expect } from 'vitest'
import { containsDuplicate } from '../src/containsDuplicate'

describe('Contains Duplicate', () => {
  it('Devolver falso si el array es vacio', () => {
    const input: number[] = []
    const output: boolean = false
    const fn = containsDuplicate(input)
    expect(fn).toBe(output)
  })

  it('Devolver true si el array contiene numeros duplicados', () => {
    const input: number[] = [1, 2, 3, 1]
    const output: boolean = true
    const fn = containsDuplicate(input)
    expect(fn).toBe(output)
  })

  it('Devolver false si el array no contiene numeros dupulicados', () => {
    const input: number[] = [1, 2, 3, 11, 100, 4, 9]
    const output: boolean = false
    const fn = containsDuplicate(input)
    expect(fn).toBe(output)
  })
})
