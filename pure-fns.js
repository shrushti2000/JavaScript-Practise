//1. Pure function
function add1(a,b){
  return a+b;
}
console.log(add1(2,3))
//Always returns 5 for same inputs 2 and 3

//2. Impure function 
function add2(a,b){
  return a+b+Math.random();
}
console.log(add2(2,3));
//Always returns different outputs for same inputs 2 and 3


//3.Side effects
const arr=[1,2,3];

function addEl(el){
 arr.push(el);

}
addEl(4);
console.log(arr);
//Changing the content outside function (arr in our case).This is causing side effects.Also arr is not passed as input.

//3.Overcoming side effects
const arr1=[1,2,3];

function addEl1(arr1,el){
  return [...arr1,el]
}
console.log(addEl1(arr1,4));
console.log(arr1);
//now arr1 is passed as input and also we are not affecting anything outside in global scope.



