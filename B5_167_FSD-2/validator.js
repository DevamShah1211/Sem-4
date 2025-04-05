import val from 'validator';
let email='test@gmail.com'
console.log(val.isEmail(email))
console.log(val.isEmail('hello'))
var name="Hello"
console.log(val.isLowercase(name))
var data=" "
console.log(val.isEmpty(data))

console.log(val.isEmail(" jhu"))
console.log (val.isHexadecimal('ABC'))
console.log (val.isLowercase('xyz'))
console.log (val.isCurrency("123"))
console.log (val.isDecimal("12.2"))
console.log (val.isJSON('{"Name":"ABC","AGE":20}'))

