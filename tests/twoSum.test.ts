import { describe, it, expect } from 'vitest'
import { twoSum } from '../src/twoSum'

describe('Two Sum', () => {
  it('Devuelve un arreglo vacío si se pasa un arreglo vacío', () => {
    expect(twoSum([], 10)).toEqual([])
  })
  it('Si la longitud del arreglo es 2, entonces, devolver las unicas dos posiciones del arreglo', () => {
    expect(twoSum([3, 3], 6)).toStrictEqual([0, 1])
  })
  it('Devuelve las posiciones de los números que suman al objetivo', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const fn = twoSum(nums, target)
    const output = [0, 1]
    expect(fn).toEqual(output)
  })
  it('Devuelve las posiciones de los números que suman al objetivo', () => {
    const nums = [3, 2, 4]
    const target = 6
    const fn = twoSum(nums, target)
    const output = [1, 2]
    expect(fn).toEqual(output)
  })
})
