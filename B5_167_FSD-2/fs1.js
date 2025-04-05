fs=require('fs')
fs.writeFileSync("Hello.txt","Hello World",function(err){
    if(err)
        console.log(err)
    else
    console.log("Write Operation Complete")
})
fs.readFile("Hello.txt",function(e,data){
    if(e)
        return console.error(e)
    console.log(data.toString())
    console.log("Complete")
})
console.log("Program Ended")

fs.appendFile("Hello.txt","Is It Fg",function(err){
    if (err)
        console.log(err)
    else
        console.log("Append Success")
})