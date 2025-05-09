const express=require('express')
const router= express.Router()
const mvi = [

    {id: 1,name: "MS Dhoni",team: "Chennai Super Kings",role: "Batsman",runs: 5082,wickets: 0},
  
    {id: 2, name: "Virat Kohli",team: "Royal Challengers Bangalore",role: "Batsman",runs: 7263,wickets: 4},
  
    {id: 3, name: "Rohit Sharma",team: "Mumbai Indians",role: "Batsman",runs: 6211,wickets: 15},
  
    {id: 4,name: "Hardik Pandya",team: "Mumbai Indians",role: "All-rounder",runs: 2309, wickets: 53},
  
    {id: 5,name: "Ishan Sharma",team: "Gujarat Titans",role: "Bowler",runs: 388,wickets: 139}
  
  ];
router.get('/',(req,res)=>{
    res.json(mvi)
})
router.get("/:id", (req, res) => {
    var cm = mvi.filter((m) => {
        if (m.id == req.params.id) {
            return true
        }
    })
    if (cm.length == 1) {
        res.set("Content-Type","text/html")
        res.json(`${cm[0].name},${cm[0].branch},${cm[0].contact},${cm[0].city}`)
    }
    else {
        res.json("Not Found")
    }
})
module.exports = router