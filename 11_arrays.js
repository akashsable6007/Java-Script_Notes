// arrays are use to store multiple values 
//dataypes of arrays are return object
// there are two types of arrays in js
//1) Homogenous arrays:-> which contain same values .
// let array = ["akash", "sachin", "vishal"]

//2) Hetrogenous arrays:--> which contain different values or mix values.
// let array = ["akash", 7767676, true, null];

// There are some imp arrays methodes 
//1) array length 
// length is not a method it is a properties 
let array = ["akash", "harsh", "rahul"];
console.log(array.length);

//2) array toString()
// if we want to convert array to string 
let array1 = ["akash", "harsh", "rahul", "rohit", "nilesh"];
console.log(array1.toString());

//3)  array pop()
//if we want delete last item of array
let array2 = ["akash", "harsh", "rahul", "raaaananananan", "tatatatatatatatata"];
console.log(array2.pop());
// deleted item it will return as a output.

//4) array push()
//if we want add item at the last of array.
let array3 = ["akash", "rahul"];
console.log(array3.push("chandrmukhi"));
// it will return new array length in the output.

//5) array shift()
//it removes first element of array and other shifts to lower indices 
let color = ['red', 'blue', 'black', 'white'];
console.log(color.shift());
//it will return that shifted element in the output.

//6) array unshift()
// it adds element at the first index no.
let color2 = ['red', 'blue', 'black', 'white'];
console.log(color2.unshift("black"));
// it returns new length of array

//7) array join()
//it will join the array element by using seprator 
let num = [1, 2, 3, 4, 5];
console.log(num.join('-')); 

//8) array delete()
// it delete the element from array by giving indix no.
// delete is not a methode its a operator 
// length of array will never change after deleting the ele.
let num1 = [1, 3, 4, 7, 89, 9]
delete num1[0];
console.log(num1);

//9) array concat()
//if we want mearge two arrays .
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c);

//10) array sort()
//it arange elements by orderly 
let ele = [9, 7 , 8];
console.log(ele.sort());

//11) array revser() 
// reverse the array 
let p = [1, 3, 6];
console.log(p.reverse());

//12) array splice()
//when we have add and delete item at same time 
let number = [1, 2, 3, 4, 4, 4 , 4]
number.splice(2, 3, 1020, 1021, 1022)
console.log(number);

//13) array slice()
//slice cut out a piece of an array and create new array
let newNum = [12, 15, 17, 18, 20, 22, 23, 26]
let newNo = newNum.slice(2)
console.log(newNo);