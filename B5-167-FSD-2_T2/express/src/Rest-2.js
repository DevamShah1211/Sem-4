// Task-3


// Use RESTful API with router that provides detailed information about IPL cricket players. The API should 
// `support retrieving player information based on:

// 1.   Player ID

// 2.   Player Role (e.g., Batsman, Bowler, All-rounder)

// When a user accesses these endpoints, the server should return structured HTML content with the player's profile.
const express=require('express')
const app=express()
const m = require('./Rest-2data')
app.use('/',m)
app.listen(5678)