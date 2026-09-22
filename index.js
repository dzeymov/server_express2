const http = require('http')
const express = require("express")
const app = express()

const PORT = 3000;

app.get("/", (req, res)=>{
    res.send("Главная страница")
})

app.listen(PORT, ()=>{
    console.log(`Сервер запущен на localhost:${PORT}`);
    
})