// Difference between let/var/const

// 1 Scope level Difference 
// {} this is called scope 

//var 
var myName = "akash";
console.log(myName);
{
    var myName= "harsha";
}
console.log(myName);
// we can acces it globally 

//let and const
let mySurname = "sable";
// console.log(mySurname);
{
    let mySurname = "more"  // this only access the value of in the block {}
}
console.log(mySurname);


//2 Redecleration 
//var 
var city = "pune";
console.log(city);
var city = "jalna";
console.log(city);
// redecleration is possible with var 

//let and const 
let score = 19;
console.log(score);
// let score = 957;
// console.log(score);
 // not possible 


 // 3 Reassignment value 
// let, var
    let marks = 40;
    console.log(marks);
    marks= 44;
    console.log(marks);
// possible 

// with const not possible 
const num = 56;
console.log(num);
// num = 66;
// console.log(num);

/// 4 Hoisting 
// hoisting is means first define the value to variable and then decleare it .
// with var its possible 

p= 12;  // define 
var p;  // declear
console.log(p);
 
// with let and const is not possible 