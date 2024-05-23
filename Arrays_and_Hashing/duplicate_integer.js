function hasDuplicate(nums) {
  let frequency_nums = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (frequency_nums.has(nums[i])) {
      return true;
    } else {
      frequency_nums.set(nums[i], 1)
    }
  }
  return false;
}

let one = [1,4,5,3,2];
let two = [1,1,2];
let three = [1,2,3,4]

console.log((hasDuplicate(two)))