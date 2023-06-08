function sumOfSquares(a: number): number {
  const SQUARED = 2
  let output = 0

  while (a !== 0) {
    let digit = a % 10
    digit = Math.pow(digit, SQUARED)
    output += digit
    a = Math.floor(a / 10)
  }
  return output
}

export function isHappy(n: number): boolean {
  if (n < 0) return false

  const seen: Set<number> = new Set<number>()

  while (!seen.has(n)) {
    seen.add(n)
    n = sumOfSquares(n)

    if (n === 1) return true
  }

  return false
}
