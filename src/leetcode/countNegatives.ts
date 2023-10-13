export function countNegativesBinarySearch(grid: number[][]): number { // 0(m * log(n))
  let count = 0

  for (const row of grid) {
    let low = 0
    let high = grid.length - 1

    while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2)
      if (row[mid] < 0) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    console.log(low)
    count += row.length - low
  }
  return count
}

export function countNegatives(grid: number[][]): number { // 0(m + n)
  let count = 0
  const rows = grid.length
  const cols = grid[0].length

  let row = 0
  let col = cols - 1

  while (row < rows && col >= 0) {
    if (grid[row][col] < 0) {
      // quiere decir que hay un negativo
      count += rows - row
      col--
    } else {
      row++
    }
  }
  return count
}

const grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
console.log(countNegatives(grid))
