export function solution(a: number[][]): number[][] {
  let l = 0
  let r = a.length - 1

  while (l < r) {
    for (let index = l; index < r; index++) {
      const top = l
      const bottom = r

      const topLeft = a[top][l]
      a[top][l] = a[bottom][l]
      a[bottom][l] = a[bottom][r]
      a[bottom][r] = a[top][r]
      a[top][r] = topLeft
    }
    r -= 1
    l += 1
  }
  return a
}
