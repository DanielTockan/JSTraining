// Do not include space taken up by the inputs as we have no control over this

function booo(n) { // We only have control over what happens inside of the function
  for (let i = 0; i < n.length; i++) { //O(1)
    console.log('booo') // O(1)
  }
}

booo([1,2,3,4,5]) // O(1)


function arrayofNTimes(n) {
  const array = [] // have created a data structure O(n)
  for (let i = 0; i < n; i++) { // create variable ,  n loops
    array[i] = 'hi'
  }
  return array
}
console.log(arrayofNTimes(6));// O(n)