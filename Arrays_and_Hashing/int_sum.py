"""
AUTHOR: An Dang
DATE: 05/23/24

Solves the NeetCode Two Integer Sum problem
"""
from typing import List
def twoSum(nums: List[int], target: int) -> List[int]:
  nums_wo_num = {}
  for i in range(len(nums)):
    exclude_lst = nums.copy()
    del exclude_lst[i]
    nums_wo_num[nums[i]] = exclude_lst
    
  
  
  
def main():
  one = [3,4,0,1]
  target = 7

  twoSum(one, target)
  return 0

if __name__ == '__main__':
  main()