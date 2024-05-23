/**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
function isAnagram(s, t) {
  let letters_s = new Map()
  let letters_t = new Map()

  if (s.length != t.length) {
    return false
  }

  for (let i = 0; i < s.length; i++) {
    if (letters_s.has(s[i])) {
      letters_s.set(s[i], letters_s.get(s[i]) + 1)
    } else {
      letters_s.set(s[i], 1)
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (letters_t.has(t[i])) {
      letters_t.set(t[i], letters_t.get(t[i]) + 1)
    } else {
      letters_t.set(t[i], 1)
    }
  }

  if (letters_s.length != letters_t.length) {
    return false
  }

  for (let [key, value] of letters_s) {
    if (!letters_t.has(key) || letters_t.get(key) != value) {
      return false
    }
  }
  
  return true
}

let one = "a"
let two = "ab"
let three = "race"
let four = ""

console.log(isAnagram(one, two))