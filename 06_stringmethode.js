// There are many strings methods We see those which are imp.
//strings are basically use to store and manupilate the text 

//if we want to check length of any string that time we use length property
// length is property not methode
// length
let myName = "akashharsha";
console.log(myName);
console.log(myName.length);

//string Interpolation
//we can insert the variables inside the template laiteral ``
let boy1 = "akash";
let boy2 = "harsha";
let boy3 = `${boy1} is friend of ${boy2}`
console.log(boy3);
//for interpolation you have to write ${} 



// slice() method 
let naam = "rameshwer";
console.log(naam);
console.log(naam.slice(0, 3));
//if you want cut some part from the string and it will be obtained in output that time you use 
//slice() methode of string.
// Slice() methode extract a part of string and return the extracted part.

//substring() method
//it is also work as slice() method 
// only diference is that start value and end value are treated as 0 .
let text = "eatapple"
console.log(text);
console.log(text.substring(2, 5));
//substring will slice all the part except the two indics no are given.

//substr() methode
let city = "pune, aurangabad";
console.log(city);
console.log(city.substr(2, 5));

//replace()
let item = "i like watch, i like shoe";
console.log(item.replace("watch", "shoe"));
//replace() method only replace first match
// it find first match and replace with 2nd word 


//toUpperCase ()
let name = "akash";
console.log(name.toUpperCase());

//toLowerCase()
let naav = "AKASH";
console.log(naav.toLocaleLowerCase());

//concat()
//if we have add two strings use concat()
let fname = "akash";
let lname = "sable";
console.log(fname.concat('', lname));

//trim() method 
// this trim methode will removes whitespaces from the both sides of a strings
let surName = "   sable     ";
console.log(surName.trim());

//parseInt()
//if you want convert string to number
let num = "999";
let num2 = parseInt(num);
console.log(num);

// charAt string method 
let text1 = "HELLO WORLD"
let char = text1.charAt(2);
console.log(char);


// split method 
let date = "19-10-2001";
let newDate = date.split('-'); //it splits out date and will return array.
console.log(newDate);
console.log(newDate.toString());
console.log(newDate[2]);

// include string method 
let add = "akash rahul ramesh raghav";
console.log(add.includes("akash"));  // include methods return true if value is include in data else will return false .

// startwth and endwith method 
let statuscode = "100256";
let a = statuscode.startsWith("100");
console.log(a);
console.log(statuscode.endsWith("56"));


// index of methode  
let text5 = "Hello I am Akash Sable";
let result = text5.indexOf("am");
console.log(result);
// if words are repeted that time it should return first match of index 
console.log(text5.indexOf("ammmmm")); // return is always -1 .

// search of property 

let text6 = "Mr. Blue has a blue house";
// let position = text6.search("blue");
let position = text6.search(/blue/i); // we can add regex pattern 
console.log(position); // difference between search and index of methode :>> we cannot pass regex pattern to indexof .

// The search() cannot take start position argument .
// The index of() method cannot search against a regular expression.
// The search() method returns the position of first match.
// the match() method returns an array of matches.

