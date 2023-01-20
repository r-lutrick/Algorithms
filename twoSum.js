/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// (-10) ** 9 <= nums[i] <= 10 ** 9 && 
// nums = [2, 7, 11, 15]
// target = 9
nums = [3, 2, 4]
target = 6

var twoSum = function (nums, target) {
    // Brute Force O(n**2)
    // for (let i = 0; i < nums.length; i++) {
    //     let arri = nums[i];
    //     for (let j = 1 + i; j < nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i, j]
    //         }
    //     }
    // }

    // Hash table
    // hashmap = {}
    // for (let i = 0; i < nums.length; i++) {
    //     hashmap[nums[i]] = i
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     let complement = target - nums[i]
    //     // if complement number (target - current value) is in the hashmap
    //     // and complement index is not current index value return two values
    //     if (complement in hashmap && hashmap[complement] != i) {
    //         return [i, hashmap[complement]]
    //     }
    // }

    // Hash table one pass
    hashmap = {}
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i];
        if (complement in hashmap) {
            return [i, hashmap[complement]]
        }
        hashmap[nums[i]] = i
    }
};

console.log(twoSum(nums, target))