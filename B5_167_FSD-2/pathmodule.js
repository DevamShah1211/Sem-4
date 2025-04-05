pm=require('path')
fs=require('fs')
path1=pm.dirname("D:/B5_167_FSD-2/a1.txt")
console.log(path1)
path2=pm.extname("D:/B5_167_FSD-2/a1.txt")
console.log(path2)
path3=pm.basename("D:/B5_167_FSD-2/a1.txt")
console.log(path3)
path4=pm.parse("D:/B5_167_FSD-2/a1.txt")
console.log(path4)
if(path1.ext=='.txt'){
    fs.writeFileSync('path.txt',"Your File Is .txt ext")
}
else{
    fs.writeFileSync('path.txt',"Your File Is Not .txt ext")
}