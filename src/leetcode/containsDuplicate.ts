export function containsDuplicate(nums: number[]): boolean {
  if (nums.length === 0) return false
  const seen: Set<number> = new Set<number>()

  for (const num of nums) {
    if (seen.has(num)) return true
    seen.add(num)
  }
  return false
}
