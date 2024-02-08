// functions 
// functionas are basically use as block to perform a perticular task 
// we use function to implement logic 
// fun is use to organized code in js

//mainly there are two types of function 
//1) parametrizesd function :- it function is defined with one or more parameters in fun decleartion
function greet(name){
    console.log("hello, " + name );
}
greet("akash");

//2 Parameterless Function :- it is defined without parameter in decleartion 
// it called without passing any arrgument 
function greet( ){
    console.log("hii akash");
}
greet();

//we can pass function also using arrow function 
// it is only exampal
let a = 10;
let b = 20;
let sum = ( a, b) =>{
    let c = a + b ;
    return c;
}
console.log(c);