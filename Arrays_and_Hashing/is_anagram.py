"""
AUTHOR: An Dang
DATE: 05/22/24

Solves the NeetCode "Is Anagram" problem
"""

def is_anagram(s: str, t: str) -> bool:
  letters_s = {}
  letters_t = {}

  for char in s:
    try:
      letters_s[char] += 1
    except KeyError:
      letters_s[char] = 1
  for char in t:
    try: 
      letters_t[char] += 1
    except KeyError:
      letters_t[char] = 1

  return letters_s == letters_t


def main():

  return 0

if __name__ == '__main__':
  main()