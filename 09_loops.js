//loops :- basically we use loops to perform repated action .

// there are 5 types of loops 

//1) for(){} loop
for (let i = 0 ; i < 1000 ; i++) {
    console.log(i);
}
// it will print from from 0 to 999 

// if you want print from 0 to 1000, then only do +1 in console
for (let a = 0 ; a < 1000; a++){
    console.log(a+1);
}

//2) for in (){} loop
// for in  loop use in object case 
// which is itrateble 
let marks = {
    akash: 95,
    harsh: 96,
    shiv: 56

}
for (let score in marks){
    console.log(marks[score]);
}

// 3) for of(){} loop
// for of loop use in arrays mostly
let colors = ['red', 'green', 'blue']
for (let items of colors){
    console.log(items);
}

// //4) while (){} loops
// let n = prompt("enter a number")
// n = Number.parseInt(n)
// let i = 0;
// while (i<n) {
//     console.log(i); 
//     i++   
// }

//5) do while (){}
// do while is loop of type which one time print 
let num = 0 ;
 let a = 0 ;
 do{
    console.log(num);
    a++;
 }
 while(a<=5){
    console.log(a);
 }