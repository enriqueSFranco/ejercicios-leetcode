import { describe, it, expect } from 'vitest'
import { isHappy } from '../src/happyNumber'

describe('Happy Number', () => {
  it('Devolver falso si la entrada es un entero negativo', () => {
    const input = -10
    const fn = isHappy(input)
    expect(fn).toBe(false)
  })

  it('Devolver true si es un numero feliz', () => {
    const input = 19
    const fn = isHappy(input)
    expect(fn).toBe(true)
  })

  it('Devolver false si no es un numero feliz', () => {
    const input = 2
    const fn = isHappy(input)
    expect(fn).toBe(false)
  })
})
