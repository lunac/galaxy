/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start

const _twoSum = (nums: number[], target: number): number[] => {
    let secondIndex;
    const firstIndex = nums.findIndex((outerValue,outerIndex) => {
        secondIndex = nums.slice(outerIndex + 1).findIndex(innerValue => innerValue + outerValue === target)
        return secondIndex !== -1
    }) || 0
    return [firstIndex,firstIndex+secondIndex+1]
}

const _twoSum2 = (nums: number[], target: number): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
           if(nums[i] + nums[j] === target) return [i,j]
        }
    }
    return []
}

const _twoSum3 =  (nums: number[], target: number): number[] => {
    const hashmap:Map<number,number> = new Map();
    for (let index = 0; index < nums.length; index++) {
        const difference = target - nums[index]
        if ( hashmap.has(difference)) return [hashmap.get(difference) as number,index]
        hashmap.set(nums[index],index)
    }
    return []
}

function twoSum(nums: number[], target: number): number[] {
    return _twoSum3(nums, target)
};
// @lc code=end

export {twoSum}