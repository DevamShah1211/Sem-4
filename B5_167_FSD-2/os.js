os=require('os')
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
console.log(os.freemem())
a=os.freemem()
gb=a/1024/1024/1024
console.log(gb)
fs=require('fs')
if(gb>=1){
    fs.writeFileSync('gb.txt','Memory Above 1 GB')
}
else{
    fs.appendFileSync('gb.txt','Memory Below 1 GB')
}