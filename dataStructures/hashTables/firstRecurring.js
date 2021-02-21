//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


// ! My attempt
function firstRecurringCharacter2(input) {
  // creating a set to store items in array
  const table = new Set(input)
  // loop through all items in the array and see if
  // there is a match in the set
  for (let i = 0; i < input.length; i++) { // O(n)
    if (table[input[i]])
      return input[i]
  }
  return undefined
}

// ! The correct solution
// ! Reduced the time complexity by NOT using nested for loops
// ! as the solution
// ! However one drawback is an increase in space complexity
// ! by creating a new object (the hash table)
function firstRecurringCharacter(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
    }
    console.log(map)
  }
  return undefined
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

const input = [2, 1, 1, 2, 3, 5, 1, 2, 4]

console.log(firstRecurringCharacter(input))