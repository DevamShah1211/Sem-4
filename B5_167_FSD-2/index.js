// var{add,sub}= require('./calc.js')
// console.log("Addition:",add(10,5))
// console.log("Subtraction:",sub(10,5))
// var d = require('./calc.js')
// console.log(d.c1(10,5))
// console.log('sub=',d.c2(5,2))

// write node js script to create a calculator using external module script having a fn add sub mul div this fun returns  
// the result of calc write all necessary js file

var{add,sub,mul,div}=require('./calc.js')
console.log(add(10,20))
console.log(sub(10,20))
console.log(mul(10,20))
console.log(div(10,20))
