const msg = function(){
    console.log("This Will Printed After 3 Seconds")
}
setTimeout(msg,3000)

setTimeout(function(){
   console.log("This Will Printed After 3 Seconds") 
}, 
3000);
setTimeout(() => {
    console.log("Hello".toUpperCase())
}, 5000);

const msg1 = function(){
    console.log("This Will Printed After 3 Seconds")
}
setInterval(msg1,3000)

setInterval(function(){
   console.log("This Will Printed After 3 Seconds") 
}, 
3000);
setInterval(() => {
    console.log("Hello".toUpperCase())
}, 5000);