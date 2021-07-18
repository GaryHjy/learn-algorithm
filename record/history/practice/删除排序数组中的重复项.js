// 题目
// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 解题思路
// 1. 循环遍历，判断前一项与后一项，对数组做操作
// 2. 双指针，快慢指针进行遍历, 判断慢指针的值与快指针的值是否不一样，然后进行赋值
// [1, 1, 2, 3, 4, 5]
//  ↓  ↓
//  慢 快  ----------> 判断是否不一样
//      --↓              ↓
//        快---------> 移动快指针 -> 成立的话，将慢指针的下一个值赋值为当前快指针


/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   let i = 0;
//   while(i < nums.length) {
//     if(nums[i] !== nums[i+1]) {
//       i++;
//     } else {
//       nums.splice(i + 1, 1)
//     }
//   }
//   return nums.length
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let left = 0;
  let right = 1;
  while(right < nums.length) {
    if(nums[left] !== nums[right]) {
      nums[++left] = nums[right]
    }
    right++;
  }
  nums.length = left + 1;
  return nums.length
};

const nums = [0,0,1,1,1,2,2,3,3,4];

const numsLength = removeDuplicates(nums)

console.log(numsLength);
console.log(nums);