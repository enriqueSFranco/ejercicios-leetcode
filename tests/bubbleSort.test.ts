import { describe, it, expect } from 'vitest'
import { bubbleSort, bubbleSortMin } from '../src/algoritmos_ordenamiento/bubbleSort'

describe('Bubble Sort', () => {
  it('Devolver el array ordenado de forma ascendente si nos dan un array desornedado', () => {
    const array = [-2, 45, 0, 11, -9]
    const output = [-9, -2, 0, 11, 45]
    const fn = bubbleSortMin(array)
    expect(fn).toEqual(output)
  })
  it('Devolver el mismo array de entrada si el tamaño del array es de 1', () => {
    const array = [-2]
    const output = [-2]
    const fn = bubbleSortMin(array)
    expect(fn).toEqual(output)
  })

  it('Devolver el mismo array de entrada si el tamaño del array es de 0', () => {
    const array = []
    const output = []
    const fn = bubbleSortMin(array)
    expect(fn).toEqual(output)
  })

  it('Devolver el mismo array de entrada si el array ya esta ordenado', () => {
    const array = [1, 2, 3, 4, 5, 6, 7]
    const output = [1, 2, 3, 4, 5, 6, 7]
    const fn = bubbleSortMin(array)
    expect(fn).toEqual(output)
  })
})
