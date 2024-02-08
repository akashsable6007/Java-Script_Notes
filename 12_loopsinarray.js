// loops in array 
// this is also called as array iteration methods 

//basic for loop
let num = [1, 2, 3, 4, 5]
for (let i=0; i<=num.length; i++){
    console.log(num[i]);
}
// this is basic form we make it simple
//using forEach () loop

// forEach () loop
let marks = [90, 91, 93, 84, 76]
marks.forEach(element => {
    console.log(element);
});
// if we want to add, subs, multiply, divide only do 
// element*element etc.

// Array.form() 
// for converting string to array 
let name = "akash";
let arr = Array.from(name)
console.log(arr);

// for of () loop
let car = [98, 97, 55]
for (let item of car) {
    console.log(item);    
}