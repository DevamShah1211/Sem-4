// Write a node js script to take 5 single digit element seperated by white space in data.txt file 
// using .sort method sorted output will fetched from that file and displayed on console
fs=require('fs')
fs.writeFileSync('a1.txt',"5 9 6 8 10 12 13 18 19 30")
data=fs.readFileSync('a1.txt','utf-8')
sp=data.split(" ")
console.log(sp)
for(i=0;i<sp.length;i++){
    sp[i]=parseInt(sp[i])
}
sp=sp.sort()
console.log(sp)