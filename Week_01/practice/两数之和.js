// 题目
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

// 解题思路
// 1. 两个for循环暴力破解 时间复杂度在 O(n2)
// 2. 哈希查找 时间复杂度为 O(1)，通过将对应的key及下标存起来，然后通过判断target-nums[i]是否存在对应的key

/**
 * @description 两层for
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       if(nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// };


/**
 * @description 哈希查找，一次for循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function(nums, target) {
//   let map = {};
//   for(let i = 0; i < nums.length; i++) {
//     let value = nums[i]
//     let res = target - value
//     if(map[res] !== undefined) {
//       return [map[res], i]
//     }
//     map[value] = i
//   }
// };


/**
 *  @description 哈希查找，while循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let map = {};
  let index = 0
  while(index < nums.length) {
    let value = target - nums[index];
    if (map[value] !== undefined) {
      return [map[value], index];
    }
    map[nums[index]] = index;
    index++;
  }
};

const result = twoSum([2, 7, 11, 15], 9)
console.log(result);
