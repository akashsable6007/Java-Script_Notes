// most imp methods of arrayiteration 
//these are higher order methodes 

// 1) map() method
// map will return new array by performing some operation on each array element .

let arr = [12, 13, 14, 15];
arr.map((value) => {
    console.log(value);
})
// console.log(arr);
// we can also print index and aarys value in outout by passing arguments 

let num = [11, 123, 234, 456, 567]
num.map((value, index, array) => {
    console.log(value, index, array);
})

// 2) filter () method
let arr2 = [142, 2436, 64858, 875, 748, 7686868]
let a2 = arr2.filter((a) => {
    return a < 900;
})
console.log(a2);

