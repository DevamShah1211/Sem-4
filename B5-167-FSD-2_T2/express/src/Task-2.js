// Task-1 Write an express js script to define one JSON array of 3 objects having properties name and age.
//  Short these objects according to age. If user request sorted names in url then all names along with 
// age should be printed according to descending order of age. Also, display these sorted values on “Sort page” and 
// display JSON object on “Home page”.
const express = require('express');
const app = express();
data =[{ "Name": "Devam", "Age": 20 }, { "Name": "Deep", "Age": 23 }, { "Name": "Kavya", "Age": 42 }, { "Name": "Aagam", "Age": 30 }]

app.get('/',(req,res)=>{
    res.set("Content-Type","text/plain")
    // res.write(data)
    res.send(data)
})
app.get('/sort', (req, res) => {
    data = data.sort((a, b) => b.Age - a.Age);
    for(let i=0;i<data.length;i++){
        res.write(data[i].Name+" "+data[i].Age+"\n")
    }
    res.send()
  });
  
app.listen(5050,()=>{
    console.log("Server is listen at http://localhost:5050")
})

