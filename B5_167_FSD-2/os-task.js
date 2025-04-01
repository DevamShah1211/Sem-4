// Write node.js script to create a folder named “AA” at temp folder.
// Also, create file named “temp1.txt” inside “AA” folder. Now, check if working on 32 bit plateform then print 
// You are working on windows 32 bit else print You are working on windows 64 bit.
os=require('os')
fs=require('fs')
f=os.tmpdir()
p=os.platform()
fs.mkdirSync(f+'/AA1')
if(p=="win32"){
    fs.writeFileSync(f+"/AA1/temp.txt","You Are In 32 Bit System")
}
else{
    console.log("Not Working")
}
