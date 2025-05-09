// Task (Restful API)-1: Write an expressJS script to create an api having details of id, name, branch, 
// contact and city details in one JS file. Export it as a module and display all details on “api” page of server. 
// Also provide particular branch wise or id wise details on page according to user request in url. 
const express=require('express')
const app=express()
const m = require('./Rest-1data')
app.use('/',m)
app.listen(5678)