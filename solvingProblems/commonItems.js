// Given 2 arrays, create a function that lets a user know
// (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a','b','c','x']
// const array2 = ['z', 'y', 'i']
// should return false
// ------------
// const array3 = ['a','b','c','x']
// const array4 = ['z', 'y', 'x']
// should return true.

// ! 1st point -- Write down key points
// !
// ! 2 parameter - no size limit?? (again I must clarify this)
// ! return true or false


// ! 2nd point -- Clarify inputs and outputs
// !
// ! are the inputs always going to array? confrim this
// ! always confirm this


// ! 3rd point -- Identify the most important factor
// !
// ! How large is the array going to get
// ! If the input never gets large, we will not have to worry
// ! about Big O as much
// ! Ask if the goal is to be as efficient regarding space,
// ! time ot otherwise

// ! 5th point -- Brute force approach
// !
// ! Talk through brute force, naive first approach that 
// ! comes to mind before even coding
// ! For me this was the nested loop solution that I provided
// ! This is actually the solution that I want to avoid as it
// ! is very inefficient but at least mention it

// function commonLetter(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     for (let j=0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         return true
//       }
//     }
//   }
//   return false
// }
// O(a*b) - Time complexity because it is a nested loop
// O(1) - Space complexity as no new variables are created

// const input1 = ['a','b','c','x']
// const input2 = ['z', 'y', '55']

// console.log(commonLetter(input1,input2))

// ! 6th point -- Explaination of faults with brute force approach
// !
// ! We have a time complexity Big O (a*b) which is very inefficient
// ! Remember as we have 2 different inputs, it is NOT Big O (n^2)
// ! as the array iputs can be different sizes

// ! 7th point -- Walk through brute force approach and fix it
// !
// ! Not clear exactly where I could imporove this just yet as I am
// ! new to these type of problems so not as proficient yet BUT
// ! according to Andrei, I could speed this up by using hash tables
// ! i.e. objects converting O(a*b) into something faster
// I commented the above out and will now refactor to improve!

const input1 = ['a', 'b', 'c', 'x']
const input2 = ['z', 'y', 'a']

// ! still 7th point
// ! create function that converts one of the input arrays to an object
// ! array1 ==> obj {
// ! a: true,
// ! b: true,
// ! c: true,
// ! d: true,
// ! }
// ! array2[index] === obj.properties

// ! Instead of looping through both arrays,can now loop thorugh one
// ! array and check if the property exists in the object


// ! 8th point -- the walkthrough before coding
// !
// ! Do some pseudocode for my final solution before producing final solution

function commonLetter2(arr1, arr2) {

  // loop through first array and create object
  // where properties === item in the array

  let map = {}
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true
    }
  }

  // console.log(map)

  // loop through second array and check if item in second array
  // exists on created object

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]])
      return true
  }
  return false
}

// O(a+b) rather than O(a*b)
// O(a) space complexity as a new object (variable) is being created
// which takes up memory

console.log(commonLetter2(input1, input2));

// ! 11th point -- Error checking
// !
// ! Start testing out scenarios that might potetnially break the code
// ! and test them out
// ! The key is to try and discover potential errors and point out 
// ! potential fixes to these identified issues
// ! Tell them what you would do


// ! 12th point - variable names
// !
// ! See where I could have potentially used better names for my variables

// ! 14th point - Where could I have improved
// !
// ! Say something like "If I had more time, I would have searched specific
// ! array methods that could simplify this to make it more readable"

// For example this could have been written much simpler using 
// JS methods

function containsLetter3(arr1,arr2) {
  return arr1.some(item => arr2.includes(item))
}