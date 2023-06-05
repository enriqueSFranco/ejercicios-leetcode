import { describe, it, expect } from 'vitest'
import { isIsomorphic } from '../src/isomorphicStrings'

describe('is Isomorphic', () => {
  it('Devolver false si la longitud de los string son diferentes', () => {
    expect(isIsomorphic('acb', 'avbdert')).toBe(false)
  })

  it('"Debería devolver true si las cadenas son isomórficas', () => {
    const s = 'egg'
    const t = 'add'
    const fn = isIsomorphic(s, t)
    expect(fn).toBe(true)
  })

  it('Debería devolver false si las cadenas no son isomórficas', () => {
    const s = 'foo'
    const t = 'bar'
    const fn = isIsomorphic(s, t)
    expect(fn).toBe(false)
  })

  it('Debería devolver true si las cadenas contienen caracteres repetidos pero siguen siendo isomórficas', () => {
    const s = 'sollll'
    const t = 'sunnnn'
    const fn = isIsomorphic(s, t)
    expect(fn).toBe(true)
  })
})
