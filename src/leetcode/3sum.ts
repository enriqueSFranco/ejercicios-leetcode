/* 
  https://leetcode.com/problems/3sum/description/
  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
  such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

  input: [-1,0,1,2,-1,-4] -> sorted[-4,-1,-1,0,1,2]
*/

function threeSum (nums: number[]): number[][] {
  let ans: number[][] = []
  const sortedNums = nums.sort((a, b) => a - b)

  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue
    let low = i + 1, high = sortedNums.length - 1

    while (low < high) {
      let a = sortedNums[i], b = sortedNums[low], c = sortedNums[high]
      let threeSum = a + b + c

      if (threeSum > 0) high--
      else if (threeSum < 0) low++
      else {
        ans.push([a, b, c])
        // actualizamos los punteros low y high
        while (sortedNums[low] === sortedNums[low + 1]) low++
        while (sortedNums[high] === sortedNums[high - 1]) high--
        high--
        low++
      }
    }
  }

  return ans
}