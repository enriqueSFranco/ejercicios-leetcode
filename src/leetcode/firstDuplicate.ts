export function firstDuplicate(nums: number[]): number {
  const set: Set<number> = new Set()
  const numsSize = nums.length
  let minIndex = numsSize - 1

  for (let index = 0; index < numsSize; index++) {
    const num = nums[index]
    if (set.has(num)) {
      minIndex = Math.min(minIndex, index)
    }
    set.add(num)
  }
  return set.size === numsSize ? -1 : nums[minIndex]
}