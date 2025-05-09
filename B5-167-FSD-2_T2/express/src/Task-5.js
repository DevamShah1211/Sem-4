//create html file take 2 number in input field 1 dropdown which contains options like select add sub mul div along with 
//one submit button .The input filed must contain value greater than 0 else it will give message please enter valid number
//also user must have to select any of the formula from dropdown else message will display you have not selected any 
//formula it should be displayed at calc.js page if formula is selected and number entered then calculation should be shown
const express=require('express');
const app=express();
app.use(express.static('../public'))
app.get("/calc",(req,res)=>{
    res.set('Content-Type',"text/html")
    let num1=parseInt(req.query.num1)
    let num2=parseInt(req.query.num2)
    if((num1>0)&&(num2>0)){
        if(req.query.formula=="Add"){
            a=num1+num2
            res.write(JSON.stringify(a))
        }
        else if(req.query.formula=="Sub"){
            a=num1-num2
            res.write(JSON.stringify(a))
        }
        else if(req.query.formula=="Mul"){
            a=num1*num2
            res.write(JSON.stringify(a))
        }
        else if(req.query.formula=="Div"){
            if(num2>0){
                a=num1/num2
                res.write(JSON.stringify(a))
            }
            else{
                res.write("Division By Zero")
            }
            
        }
        else{
            res.write("Select any formula")
        }
    }
    else{
        res.write("Number must be positive")
    }
    res.send()
})
app.listen(5050,()=>{
    console.log("Server is listen at http://localhost:5050")
})

