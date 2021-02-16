// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


// My solution
function accum(s) {
  let arr = []
  for (let i = 0; i < s.length; i++) {
    arr.push(format(s[i], i +1))
  }
  return arr.join('-')

  function format(s, num) {
    let letter = s.toUpperCase()

    while (letter.length !== num) {
      letter += s.toLowerCase()
    }

    return letter
  }
}

// Alternative solution
function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


