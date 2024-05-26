function topKFrequent(nums, k) {
  const result = [];
  //create map where key = each num in nums, val = freq of num
  const freq_map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!freq_map.has(nums[i])) {
      freq_map.set(nums[i], 1);
      continue;
    }
    const incFreq = freq_map.get(nums[i]) + 1;
    freq_map.set(nums[i], incFreq);
  }
  //sort this
  //                  sorting function: sort by value  VVVVVVVVVVVVVVVVVVVVV
  const sorted_freq_map = [...freq_map.entries()].sort((a, b) => b[1] - a[1]);
  //console.log(sorted_freq_map);
  //return first k pairs in map.
  for (let i = 0; i < k; i++) {
    result.push(sorted_freq_map[i][0]);
  }
  return result
  
}

const test = [1,2,2,2,3,3];
const k = 2;

console.log(topKFrequent(test, k));
console.log();