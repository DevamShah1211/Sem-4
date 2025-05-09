const express=require('express')
const router= express.Router()
const mvi=[

    { id:101,name:"ABC",branch:"CSE",contact:9876543210,city:"Ahmedabad" },

    { id:102,name:"BCD",branch:"CE",contact:9876543210,city:"Ahmedabad"  },

    { id:103,name:"XYZ",branch:"CSE",contact:9876543210,city:"Rajkot" },

    { id:104,name:"PQR",branch:"IT",contact:9876543210,city:"Ahmedabad" },

    { id:105,name:"ABC",branch:"CSE",contact:9876543210,city:"Surat" },

    { id:106,name:"ABC",branch:"IT",contact:9876543210,city:"Rajkot" }]
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