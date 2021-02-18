const { log } = require('console');
const {performance} = require('perf_hooks')

const nemo = ['nemo'];

const everyone = ['nemo', 'pq', 'p2', 'p3', 'p4', 'p5', 'p6'];

const large = new Array(1000000).fill('nemo')

function findNem0(array) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo!')
    }
  }
}

// findNem0(large) // O (n) --> Linear Time

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(2)
}

const boxes = [0,9,8,7,6,5]

logFirstTwoBoxes(boxes)