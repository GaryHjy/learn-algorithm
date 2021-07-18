// 题目
// 给定一个数组，将数组中的元素向右移动k个位置，其中k是非负数。

// 解题思路
// https://leetcode-cn.com/problems/rotate-array/solution/xuan-zhuan-shu-zu-by-leetcode/
// 1. 暴力破解，两层for循环，通过k次，然后交换位置
// 时间复杂度：O(n∗k)。每个元素都被移动1步 O(n) k次 O(k)）。
// 空间复杂度：O(1)。没有额外空间被使用。

// 2. 用一个额外的数组来将每个元素放到正确的位置上，也就是原本数组里下标为i的
// 我们把它放到 (i+k)%数组长度 的位置。然后把新的数组拷贝到原数组中。 -> (i+k)%数组长度推导公式
// 时间复杂度： O(n) 。将数字放到新的数组中需要一遍遍历，另一边来把新数组的元素拷贝回原数组。
// 空间复杂度： O(n)。另一个数组需要原数组长度的空间。

// 3. 使用环状替换
// 通过将每个值往后移动k步，通过(i+k)%数组长度推导，再用temp存储变量交换位置
// 时间复杂度：O(n)。只遍历了每个元素一次。
// 空间复杂度：O(1)。使用了常数个额外空间。

// 4. 使用反转
// 这个方法基于这个事实：当我们旋转数组k次， k%n个尾部元素会被移动到头部，剩下的元素会被向后移动。
// 在这个方法中，我们首先将所有元素反转。然后反转前k个元素，再反转后面 n-k 个元素，就能得到想要的结果
// 总结：先反转整体的位置 -> 分解为两部分反转位置
// 时间复杂度：O(n)。 n个元素被反转了总共3次。
// 空间复杂度：O(1)。 没有使用额外的空间。



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   var numsLength = nums.length;
//   var lastNum, temp
//   for(var i = 0; i < k; i++) {
//     lastNum = nums[numsLength- 1];
//     for(var j = 0; j < numsLength; j++) {
//       temp = nums[j];
//       nums[j] = lastNum;
//       lastNum = temp;
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   var cur = [];
//   for (var i = 0; i < nums.length; i++) {
//     // (i + k) % nums.length -> (0 + 3) % 7 = 3
//     cur[(i + k) % nums.length] = nums[i]
//   }
//   for (var i = 0; i < nums.length; i++) {
//     nums[i] = cur[i];
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   k = k % nums.length; // 计算超过nums长度时，自动往后补位 ( nums = 7, k = 9 ) -> k = 2
//   var count = 0;
//   for(var start = 0; count < nums.length; start++) {
//     var current = start;
//     var prev = nums[start];
//     do {
//       var next = (current + k) % nums.length; // 算出对应的下标值
//       var temp = nums[next]; // 通过第三方存储指定下标的值
//       nums[next] = prev; // 互换位置
//       prev = temp;
//       current = next; // 更新下一个目标
//       count++;
//     } while(start != current)
//   }
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(nums, start, end) {
    while(start < end) {
      var temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
};

let nums = [1,2,3,4,5,6,7];
rotate(nums, 3)
console.log(nums);