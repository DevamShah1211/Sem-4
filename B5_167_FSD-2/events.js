// const EventEmitter = require('events')
// const Event = new EventEmitter()
// Event.on("SayName",()=>{
//     console.log("Your Name Is ABC")
// })
// Event.emit("SayName")

//create a function which executes when connect handler named event is fired and print message connection successful 
//after that fire another event named data receive along with message data received successfully
// const EventEmitter = require('events')
// const Event = new EventEmitter()
// const CH = function connect(){
//     console.log("Connect-Successful")
//     Event.emit("Datareceived")
// }
// Event.on("Connect",CH)
// Event.on("Datareceived",()=>{
//     console.log("Data-received Successfully")
// })
// Event.emit("Connect",CH)


// const EventEmitter = require('events')
// const Event = new EventEmitter()
// Event.on("SayName",()=>{
//     console.log("FirstName")
// })
// Event.on("SayName",()=>{
//     console.log("MiddleName")
// })
// Event.on("SayName",()=>{
//     console.log("LastName")
// })
// Event.emit("SayName")

// const EventEmitter = require('events')
// const Event = new EventEmitter()
// Event.on("StatusPage",(code,msg)=>{
//     console.log(`Your Page Has ${code} with ${msg}`)
// })
// Event.emit("StatusPage",200,"OK")

//write a node js script to create two listners for a common event call their respective callbacks print number of events
//associated with emitter remove one of the listners and print number of remaining listners


// const EventEmitter = require('events')
// const Event = new EventEmitter()
// var l1= () =>{
//     console.log("I am Listner 1")
// }
// var l2= () =>{
//     console.log("I am Listner 2")
// }
// Event.addListener('task',l1)
// Event.addListener('task',l2)
// var count = Event.listenerCount('task')
// console.log(count+" for event task")
// Event.emit('task')
// Event.removeListener('task',l1)
// var count=Event.listenerCount('task')
// console.log(count+" for event task")
// Event.emit('task')


//Write a node js script to write the text “This is data” to new.txt file. 
// After that append the text “that is data” to same ne .txt file.
//  After that read the file and print file concept on console. 
// After finishing read operation, print the line “Thanks for using my program” on console. 
// All read/write operations are asynchronous.


const EventEmitter = require('events')
fs=require('fs')
const Event = new EventEmitter()
Event.on("write",()=>{
    fs.writeFile("new.txt","This is data",
        ()=>{
           console.log("Data Wirte")
           Event.emit("append")
        }     
    )
})
Event.on("append",()=>{
    fs.appendFile("new.txt","That is Data",()=>{
        console.log("Data Append")
        Event.emit("Append")
    })
})
Event.on("read",()=>{
    fs.readFile("new.txt","utf-8",(e,data)=>{
        console.log(data)
    })
})
Event.emit("write")
