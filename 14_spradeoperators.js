// sprade operator 
let num = [10, 20, 30 , 40, 50];
let num2 = [ ...num ]
console.log(num2);

// Concatination of two array 
let color1 = ['red', 'black', 'white']
let color2 = ['pink', 'blue', 'green']
let color3 = [...color1, ...color2]
console.log(color3);


//>>>>>> sprad is OBject
// we dont use sprade operator in object 
// use spread op if keys are diffferent in the both object 
//mergeing object with both eachother 

let emp = {
    name: "akash",
    age: "22",
    city: "pune"
};    
let emp2 = {...emp};
console.log(emp2);


