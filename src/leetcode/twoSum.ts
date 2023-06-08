// 1. Two Sum
export const twoSum = (nums: number[], target: number): number[] => {
  if (nums.length === 0) return []

  if (nums.length === 2) return [0, 1]

  const map: Record<number, number> = {}
  const ans: number[] = []

  for (let index = 0; index < nums.length; index++) {
    const diff = target - nums[index]
    if (map.hasOwnProperty(diff)) {
      ans.push(map[diff], index)
      return ans
    } else {
      map[nums[index]] = index
    }
  }
  return ans
}
