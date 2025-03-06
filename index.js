const express = require('express');
const mongoose= require('mongoose');
const app=express()
mongoose.connect("mongodb+srv://fahmi:admin@cluster0.i50yp.mongodb.net/Plateforme-Gestion-Rendez-vous")
app.listen("3001",()=>{
    console.log("server is running on port 3001")

})