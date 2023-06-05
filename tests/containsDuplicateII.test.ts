import { describe, it, expect } from 'vitest'
import { containsNearbyDuplicate } from '../src/containsDuplicateII'

describe('contains Nearby Duplicate', () => {
  it('', () => {
    const nums: number[] = []
    const k = 3
    const fn = containsNearbyDuplicate(nums, k)
    expect(fn).toBe(false)
  })

  it('', () => {
    const nums: number[] = [1, 2, 3, 1]
    const k = 3
    const fn = containsNearbyDuplicate(nums, k)
    expect(fn).toBe(true)
  })
})
