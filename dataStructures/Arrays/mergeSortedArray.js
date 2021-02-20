// Input: [0,3,4,31], [3,4,6,30]
// Output: [0, 3, 4, 4, 6, 30, 31]

// 2 arrays that are sorted
// Merge them into one big one, still sorted

// Input arrays have to be integers only?

// What is the primary concern, time or space?

// Brute force would a nested loop

function mergeSortedArrays(array1, array2) {

  for (let i = 0; i < array1.length; i++) {

    for (let j = 0; j < array2.length; j++) {

      if (array1[i] <= array2[j]) {

        array2.splice(j, 0, array1[i])

      } else if (array1[i] > array2[j]) {
        j++
      } else {
        array2.push(array1[i])
      }
    }
  }
  console.log(array2)
}

const arr1 = [0, 3, 4, 31]
const arr2 = [3, 4, 6, 30]

console.log(mergeSortedArrays(arr1, arr2))