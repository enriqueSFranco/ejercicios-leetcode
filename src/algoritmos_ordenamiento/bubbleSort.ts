import { swap } from '../helpers/swap'

// Bubble sort in Python

// O(n^2)
export function bubbleSort (array: number[]): number[] {
  const arraySize = array.length

  if (arraySize === 1 || arraySize === 0) return array

  for (let i = 0; i < arraySize; i++) {
    for (let j = i + 1; j < arraySize; j++) {
      if (array[i] > array[j]) {
        swap(array, i, j)
      }
    }
  }
  return array
}
// [-2, 45, 0, 11, -9]
export function bubbleSortMin (array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let swapped = false
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        swapped = true
      }
    }
    if (!swapped) break
  }
  return array
}