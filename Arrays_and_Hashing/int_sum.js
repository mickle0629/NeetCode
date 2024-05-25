/**
 * @function
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]}
 */
function twoSum(nums, target) {
  const num_index = new Map();

  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i]
    if (num_index.has(difference)) {
      return [num_index.get(difference), i]
    }
    num_index.set(nums[i], i);
  }
  return [-1, -1]
}

const one = [5,5]
const target = 10

console.log(twoSum(one, target))