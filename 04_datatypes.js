
// there are main 2  dataypes in javascript 
// 1. Primitive 
// 2. non-primitive/ referance 

// 1. Primitive Datatypes 
// there are total 8 privites datatypes 

//1.string
//if we write anything in double qoutes "" its datatypes will be string. 
let myName = "akash";
console.log(myName);

let marks = "90";
console.log(marks);

//2.Number
let a = 92;
console.log(a);

//3.Boolean
let isFavFriute = true;
console.log(isFavFriute);
console.log(typeof(isFavFriute));
// boolean only show true or false value 

//4.null
let name = null;
console.log(name);
console.log(typeof(name));
// the datatype of null is object

//5.undefined
let match = undefined;
console.log(match);
console.log(typeof(match));
// datatypes of undefine is undefined 

//6.symbol
let symbol = "am a symbol";
console.log(typeof(symbol));
// datatypes is string 

//7.Bigint
let num = 9999999999999999;
console.log(typeof(num));
// datatpes is number


// 2 Non-Primitive Datatypes 
// there are 3 types of non-premitive datatypes 

//1 Array []
// array is used to store multiple values 
// datatypes of array is object

let array = [];
// this is called empty array.

//javascript allow the 2 types of array

//1 Homogenous array
// which contain same values 
let homoArray = ["akash", "harsh", "pune"];

//2 Hetrogenous array 
// which contan mix values 
let hetroArray = ["akash", 9090, true, null];


// In javascript we can pass function (){} inside of array.
let funArray = [
    function(){
        //this only example
    }
];
// console.log(typeof(function(){}));


//3 Objects Datatypes {}

let cars = {
    carName : "swift",
    carPrice : 800000,
    carColor : "white"
}
console.log(cars.carName);
console.log(cars.carColor);
console.log(typeof(cars)); 

// Datatypes of object is object
