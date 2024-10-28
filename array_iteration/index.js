const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach((value)=>{
    console.log(value)
})
const numbers1 = [45, 4, 9, 16, 25];
let mapVal = numbers1.map((value)=>{
    return value +2;
})
console.log(mapVal)

const filterVal = numbers1.filter((val)=>{
    return val < 16;
})

console.log(filterVal)
const findVal = numbers1.find((val)=>{
    return val < 16;
})
console.log(findVal)
const numbers2 = [45, 4, 10, 16, 25];
const reduceVal = numbers1.reduce((total,val)=>{
    return total + val;
},0)
console.log(reduceVal)
