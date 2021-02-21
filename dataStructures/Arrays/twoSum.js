var twoSum = function (nums, target) {
  const compArray = []
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i]
    compArray.push(comp)
  }
  
};


const numArray = [1,2,3,4,5]

console.log(twoSum(numArray,8))