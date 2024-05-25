function groupAnagrams(strs) {
  //init an object to be returned upon completion
  const results = {}
  
  //for each string in strs
  for (const s of strs) {
    //array to track how many instances of each letter is in the word
    //array has 26 elements, initialized with 0.
    const letter_count = Array(26).fill(0)

    //process the strings into above array element
    for (const c of s) {
      letter_count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    const key = letter_count.join("#")
    //if results have no specific array value
    if (!results[key]) {
      results[key] = []
    }
      //add that emptyarray to results
    //then push it 
    results[key].push(s)
  }
  return Object.values(results)
}

const strs = ["car", "rac", "rat", "tar", "dirt", "mac", "ritd", "cam"];
console.log(groupAnagrams(strs));