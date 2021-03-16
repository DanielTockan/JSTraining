// Log all pairs array

const boxes = [1,2,3,4,5]

function logAllPairsArray(array) {
  for (let i = 0; i < array.length; i++) { // O(n)
    for (let j = 0; j< array.length; j++) { // O(n)
      console.log(array[i],array[j]);
    }
  }
}

logAllPairsArray(boxes) 

// Where loops are nested, you use multiplication
// O(n * n)
// O(n^2) - quadratic time 