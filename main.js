// Single Line Comment

/*
    Multi line comment
*/

// alert("This is Alert!!")
// console.log("Written in console")



// Variables in JavaScript
/*
var welcome_message = "This is a welcome message"
var age = 21
var exact_age = 21.4
alert(welcome_message + ' ' +(age+exact_age))
*/

// Undefined variables and modifying values of variables
/*
var age = 21
var myName = "Ranjit"
console.log('My age is' + ' '+ age)
console.log('My age next year will be '+ (age+1))
age++
console.log('My age next year will be '+ age++)
age--
console.log('My age last year will be '+ age--)
console.log('My name is '+ myName)
*/

// Boolean Operators
/*
var iLikeCheese = true
undefined
iLikeCheese = true
true
iLikeCheese = "true"
'true'
iLikeCheese == "true"
true
iLikeCheese == "false"
false
iLikeCheese =false
false
*/

// Comparing Values
/*
true == true
true
"hi" == "hi"
true
"hi" == 3
false
var myNum = 6
undefined
myNum
6
var isPrimeUser = false
undefined
isPrimeUser != true
true
5 > 7
false
5 >= 5
true
*/

// If-Else Statement
/*
var isPrimeUser = false
var isPrimeUser = true
var isPrimeUser = "false"
var isPrimeUser = false
if (isPrimeUser == true) {
    console.log('Thanks for being a loyal customer');
}
else {
    console.log('Subscribe to premium!')
}

var myAge = 21
 if (myAge < 1) {console.log('You are a baby')}
 else if (myAge < 3) {console.log('You are a toodler')}
 else if (myAge <= 18) {console.log('You are a teenager')}
 else{console.log('Not in records');}
*/

// For Loop
/*
for (var i=0; i < 10; i++){
    console.log('Current i ' + i);
}
*/

// function
function myname () {
    let name = "Ranjit";
    console.log('My name is ' + name);
}
myname()

function mydetail (name,age) {
    console.log('Your name is ' + name + ' Your age is ' + age);
}

mydetail("Ranjit",21)
