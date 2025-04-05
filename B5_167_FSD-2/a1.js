// data = { name:"abc",age:19}
// data1=require("./a1.json")
// console.log(data)
// console.log(data1)
// data2=require("./a2.json")
// console.log(data2.adress[2].t3)
sub={
    "FSD":[
        {"Topic":"Html",
            "Course":"Beginer",
            "Content":{"tags":"Table","Form":"XYZ"}
        },
        {"Topic":"Css",
            "Course":"Beginer",
            "Content":["tags","Table","Form"]
        }
    ]
}
console.log(sub.FSD[0].Content.tags)
console.log(sub.FSD[1].Content[0])

// var obj = json.parse('{"var1":"LJ"}');
// console.log(obj)


date=Date()
console.log(date)
obj={
    date:date,
};
console.log(obj)