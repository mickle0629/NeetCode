function encode(strs) {
  //read each word and concat to result string
  let result = ""
  for (let i = 0; i < strs.length; i++) {
    result += strs[i] + ";"
  }
  return result
}

function decode(str) {
  let result = []
  let start = 0
  let end = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] == ";") {
      end = i
      result.push(str.slice(start, end))
      start = end + 1;
    }
  }
  return result
}

const strs = [""]
const encoded_str = encode(strs)
console.log("ENCODED:" + encoded_str)
console.log(decode(encoded_str))

