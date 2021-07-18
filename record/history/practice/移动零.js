// 题目
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 解题思路
// 1. 暴力破解，两次for循环，用一个变量记录遇到0的次数
// 2. 一次for循环进行 nums[i]!= 0时，用一个变量记录下标， 然后直接交换位置

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//   var count = 0;
//   for (var i = 0; i < nums.length; i++) {
//     if(nums[i] !== 0) {
//       // 记录0的次数及交换位置
//       nums[count++] = nums[i];
//     }
//   }

//   // 利用count记录0的次数进行填充为0
//   for (var i = count; i < nums.length; i++) {
//     nums[i] = 0;
//   }
// };

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[count++], nums[i]] = [nums[i], nums[count]]
    }
  }
};

const nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);