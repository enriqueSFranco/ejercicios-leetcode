export function swap(A: number[], i: number, j: number): void {
  const temp = A[i]
  A[i] = A[j]
  A[j] = temp
}
