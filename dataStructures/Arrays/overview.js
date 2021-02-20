const strings = ['a','b','c','d']
// 4 * 4 = 16 bytes

// strings[2] = 'c'

// push
strings.push('e') // O(1)

// pop
strings.pop() // O(1)

// unshift
strings.unshift('x') // O(n) - as you need to iterate through all subseqeunt
// indexes to reassign them to n+1

// splice
strings.splice(2, 0, 'alien') // O(n  )

console.log(strings)