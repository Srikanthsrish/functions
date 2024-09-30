//TASK__1
function sayHello() { //Named function
    console.log('Hello'); 
}
sayHello();
var sayHello = function(){//Anonymous function
    console.log('Hello');
}
sayHello();
var sayHello=()=>console.log('Hello'); //Arrow function
sayHello();
//TASK__2
function printNumber() { //named funtion
console.log(5); 
}
printNumber();
var printNumber=function(){//anonymous function
    console.log(5);
}
printNumber();
var printNumber=()=>console.log(5);//arrow function
printNumber();
//TASK__3
function addAndPrint() { //named funtion
    console.log(2 + 3); 
}
addAndPrint();    
var addAndPrint=function(){//anonymous function
    console.log(3+2);
}
addAndPrint();
var addAndPrint=()=>console.log(3+2);//arrow function
addAndPrint();
//TASK__4
function add(a,b) { //named function
    return a + b;
}
var result=add(10,20);
console.log(result);
var add=function(a,b){//anonymous function
    return a+b;
}
var result=add(10,20);
console.log(result);
var add=(a,b)=>{//arrow function
    return a+b;
}
var result=add(10,20);
console.log(result);
//TASK__5
function subtract(a, b) { //Named function
return a - b; 
}
var result=subtract(10,20);
console.log(result);
var substract=function(a,b){ //anonymous function
    return a-b;
}
var result=subtract(10,20);
console.log(result);
var subtract=(a,b)=>{//arrow function
    return a-b;
}
var result=subtract(10,20);
console.log(result);
//TASK__6
function double(x) { //Named function
return x + x; 
}
var result=double(7);
console.log(result);
var doublr=function(a){ //anonymous function
    return a+a;
}
var result=double(7);
console.log(result);
var double=(a)=>{//arrow function
    return a+a;
}
var result=double(7);
console.log(result);
//TASK__8
function square(x) { //Named function
return x * x; 
}
var result=square(2);
console.log(result);
var square=function(a){//anonymous function
    return a*a;
}
var result=square(2);
console.log(result);
var square=(a)=>{//arrow function
    return a*a;
}
var result=square(2);
console.log(result);
//TASK__9
function isPositive(x) { //Named function
return x > 0;
}
var result=isPositive(-3);
console.log(result);
var isPositive=function(a){//anonymous function
    return a>0;
}
var result=isPositive(5);
console.log(result);
var isPositive=(a)=>{//arrow function
    return a>0;
}
var result=isPositive(6);
console.log(result);
//TASK__10
function absolute(x) { //Named function
if (x < 0) { 
return 0 - x; 
}
return x; 
}
var result=absolute(-8);
console.log(result);
var absolute=function(a){//anonymous function
    if(a<0){
        return 0-a;
    }
    return a;
}
var result=absolute(-4);
console.log(result);
var absolute=(a)=>{//arrow function
    if(a<0){
        return 0-a;
    }
    return a;
}
var result=absolute(2);
console.log(result);
//TASK__11
function max(a, b) { //Named function
if (a > b) { 
return a;
} 
return b;
}
var result=max(10,90);
console.log(result);
var max=function(a,b){//anonymous function
    if(a>b){
        return a;
    }
    return b;
}
var result=max(10,100);
console.log(result);
var max=(a,b)=>{//arrow function
    if(a>b){
        return a;
    }
    return b;
}
var result=max(20,78);
console.log(result);
