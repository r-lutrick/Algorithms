/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, 
return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// nums1 = [1, 2]
// nums2 = [3, 4]
nums1 = [3]
nums2 = [-2, -1]

const findMedianSortedArrays = (nums1, nums2) => {
    let m = nums1.length
    let n = nums2.length

    // median = 0

    // for (let i = 0; i < m; i++) {
    //     median += nums1[i]
    // }

    // for (let i = 0; i < n; i++) {
    //     median += nums2[i]
    // }

    // return median / (m + n)

    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i])
    }

    nums1 = nums1.sort(function (a, b) { return a - b })
    // console.log(nums1)
    if (m % 2 == 0) {
        val1 = nums1[Math.floor(m / 2)]
        val2 = nums1[Math.floor(m / 2) - 1]
        return (val1 + val2) / 2
    } else {
        return nums1[Math.floor(m / 2)]
    }
};

console.log(findMedianSortedArrays(nums1, nums2))