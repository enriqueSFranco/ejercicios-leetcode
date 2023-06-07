// https://leetcode.com/problems/contains-duplicate-ii/

export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length === 0) return false

  const windowSet = new Set()

  for (let index = 0; index < nums.length; index++) {
    if (windowSet.has(nums[index])) return true

    windowSet.add(nums[index])

    if (windowSet.size > k) {
      windowSet.delete(nums[index - k])
    }
  }
  return false
}
// [4,1,2,3,1,5] k = 3
