// let letters = new Set([1,2,3,4,5,5])
// let listSet = ""
// for (const x of letters){
//    listSet += x;
// }
// console.log( listSet)
// console.log(typeof letters)
// let emptySet = new Set()
// emptySet.add('a')
// emptySet.add('b')
// console.log(emptySet)
// let text = ""
// letters.forEach((val)=>{
//     text += val
// })
// Get all Values
// const myIterator = letters.keys();

// console.log(myIterator)
// List all Values


// console.log(text)

var getCommon = function(nums1, nums2) {
  let set1 = new Set(nums1); // Use a set for quick lookups
  let minCommon = Infinity; // Initialize a variable to track the minimum common element
  
  for (const x of nums2) {
      if (set1.has(x)) {
        console.log(x)
          minCommon = Math.min(minCommon, x); // Update the minimum common element
      }
  }
  
  // If minCommon is still Infinity, no common element was found
  return minCommon === Infinity ? -1 : minCommon;
};
let nums1 = [1,2,6]
let  nums2 = [4,5]

console.log(getCommon(nums1, nums2));

