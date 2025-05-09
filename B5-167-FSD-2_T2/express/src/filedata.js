const express=require('express')
const router= express.Router()
const mvi=[{id:101,name:'Avanger',year:2019,rating:9.5},{id:102,name:"RDJ",year:2020,rating:10},{id:103,name:"Spidy",year:2012,rating:8.5}]
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
        res.json(`movie<b style='color:red;'>${cm[0].name}</b> is released in year <b style='color:black;'>${cm[0].year}</b>having rating <b style='color:cyan'>${cm[0].rating}</b>`)
    }
    else {
        res.json("Not Found")
    }
})
module.exports = router