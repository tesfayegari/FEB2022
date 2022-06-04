Programming language 

Terminologies

Statement 
Variables
Data Types
Operators (Assignment and Logical)
Conditional Statements 
Loops 
Functions 
*Object Oriented Programming 

Example from HTML:

document.getElementById('result').innerText= document.getElementById('result').innerText*1 + 1;
x=x*1 + 1 where x = document.getElementById('result').innerText;

let x=0;
let y;
y="Tesfaye Gari";

Variables: let x, y, name; //three variables which can store anything
var and let keywords are used to declare variables. 
var a=10;
var b=-5;
var c = a + b; //5

Data Types 
-number 
-String  (text)
-Null
-undefined 
-Array (collection)
-Object 
-boolean


Operators
Mathematical operators (+, *, -, / and % ) addition, multiplication, subtraction, division and modulus which returns the reminder 
ex. 
7%5 = 2 is a reminder 
10%4 =2

logical operators 
equality ==
not equal != 
less than < 
greater than > 
less than or equal <= 
greater or equal >=
similarity ===  - when left value is equal in value and type 
not similar !==
 &&  AND 
 || OR 

example 
5 == "5"  // true - equal in value 
5 === "5"  // false - equal in value but not similar in data type 
let a = 5, b = '5'
a==b //true
a===b //false

Conditional statement (if else statement)
Syntax 
if( expression ){
  //when True
}else {
  //when false 
}

example:
let m = 3;
if( m == 1){
  console.log("Month is January");
}else {
  console.log("Month is not January");
}

Tertiary conditional statemet operator
let a = (expression ) ? TrueValue : FalseValue; 

if(expression){
  a = TrueValue;
}else{
  a=FalseValue;
}

let b = a++; //a++ == a=a+1  
a+=b; // a= a+b

let month = (m==1) ? "JAN" : "NOT JAN";


Another conditional statement is Switch ... Case => Reading assignment 


Loops (commonly used for loop)
for(initialization; conditionalExpression; increament/Decreament){
  //Statement goes here
}
for(;;){
  //do this ....
}

//Print odd numbers 
n=200;
for(let i=1; i <= n; i= i+2){
  console.log(i);
}

Function: user defined function 
function functionName (parameters) {
  //statements 
  return valueReturned;

}





Question: 
Print the following for an input integer number 

n=3: 
  *   2*i -1 where i is row number start from 1  with space n - i 
 ***
*****

n=5: 
    *
   ***
  *****
 *******
*********
n=4: 
   *
  ***
 *****
*******

Assignment: 
n=5: 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
n=4: 
   *
  ***
 *****
*******
 *****
  ***
   *


let a = true;