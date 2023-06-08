// Insertion Sort Algorithm
export function insertionSort(array: number[]): number[] {
  for (let i = 1; i <= array.length; i++) {
    const key = array[i]
    let j = i - 1
    while (j >= 0 && key < array[j]) {
      array[j + 1] = array[j]
      j -= 1
    }
    array[j + 1] = key
  }
  return array
}
