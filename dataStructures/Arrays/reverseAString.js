// Reverse all characters in the string
// Input: ['1 a 2 b 3 c']
// Output: ['c 3 b 2 a 1']

const reverse = (string) => {

  const sentenceArray = string.split('')
  const backwards = []

  for (let i = string.length - 1; i >= 0; i--) {
    backwards.push(sentenceArray[i])
  }

  console.log(backwards);
  return backwards.join('')
}

const str = 'This is backwards'

// Alternatively

const reverse2 = str => [...str].reverse().join('')

console.log(reverse2(str))

