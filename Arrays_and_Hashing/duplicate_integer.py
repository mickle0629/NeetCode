"""
AUTHOR: An Dang
DATE: 05/22/2024

Solves the Duplicate Integer problem on NeetCode.
"""
from typing import List

def duplicate_integer(nums: List):
  frequency_nums = {}
  for num in nums:
    try: 
      if frequency_nums[num]:
        return True
    except KeyError:
      frequency_nums[num] = 1
  return False

def main():
  nums0 = [1,2,3,4]
  nums1 = [1,1,3,4]
  nums2 = []

  print(duplicate_integer(nums1))
  return 0

if __name__ == '__main__':
  main()