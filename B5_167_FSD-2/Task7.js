// Write a JS to store an array of objects having name and age. display name and age of person with highest age.

 

 

// const person =

// [

// {

// name: "PQR", age: 38

// },

// {

// name: "ABC", age: 35

// },

// {

// name: "XYZ", age: 47

// }

// ]
const person = [{name: "PQR", age: 38},{name: "ABC", age: 35},{name: "XYZ", age: 47}]
let p1 = person[0];
for (let i = 1; i < person.length; i++) {
    if (person[i].age > p1.age) {
            p1 = person[i];
    }
}
console.log(p1);

function fun3(person){
    return Math.max(...person.map(obj=>obj.age))
}
console.log(fun3(person))