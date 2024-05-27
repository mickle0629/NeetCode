function encode(strs) {
  const key = 5
  const result = []
  //Each word, encode via caesar cipher
  for (let i = 0; i < strs.length; i++) {
    let encoded_word = ""
    for (let j = 0; j < strs[i].length; j++) {
      //for each char in a word
        //get its ASCII code
        //offset char = ascii code + key
        //convert it back to char.
        //concat into encoded word.
      let offset_char_code = strs[i].charCodeAt(j) + key;
      let offset_char = String.fromCharCode(offset_char_code)
      encoded_word = encoded_word.concat('', offset_char)
    }
    result.push(encoded_word)
  }
  const result_string = result.join("SEPARATE")
  console.log("ENCODED STRING: " + result_string)
  return result_string
}

function decode(str) {
  const key = 5
  const encoded_array = str.split("SEPARATE")
  const decoded_array = []
  for (let i = 0; i < encoded_array.length; i++) {
    let decoded_word = ""
    for (let j = 0; j < encoded_array[i].length; j++) {
      let offset_char_code = encoded_array[i].charCodeAt(j) - key
      let offset_char = String.fromCharCode(offset_char_code)
      decoded_word = decoded_word.concat('', offset_char)
    }
    decoded_array.push(decoded_word)
  }
  return decoded_array
}

//const strs = ["neet", "code", "loves", "you"]
// const strs = ["1234", "___343$@#$"]
const strs = []
//console.log(encode(strs))
console.log(decode(encode(strs)))
