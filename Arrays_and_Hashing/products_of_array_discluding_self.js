function productExceptSelf(nums) {
  //results array
  const result = []
  let pre = 1   //for each number, pre tracks the product all every number before it, excluding itself
  let post = 1  //for each number, post tracks the same for all after itself, ecluding.
  //first round: calculate prefixes and store in result
  for (let i = 0; i < nums.length; i++) {
    result[i] = pre
    pre *= nums[i]
  }

  //second round, calculate postfixes and multiply into result
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= post
    post *= nums[i]
  }
  return result
}

const nums = [-1,0,1,2,3]
console.log(productExceptSelf(nums))