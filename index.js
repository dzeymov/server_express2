const express = require("express")
const app = express()

const PORT = 3000;


app.get("/", (req, res)=>{
    res.send("Главная страница")
})

app.get("/about", (req, res)=>{
    res.send("О нас")
})

app.get("/contacts", (req, res)=>{
    res.send("Наши контакты 8999-111-22-33")
})

app.get('/product/:id', (req ,res)=>{
console.log(req.params);
res.send(`Товар с id: ${req.params.id}`)

})


app.get('/phone/:number', (req ,res)=>{
    console.log(req.params);
    res.send(`Ваш номер телефона: ${req.params.number}`)
    
    })



app.listen(PORT, ()=>{
    console.log(`Сервер запущен на localhost:${PORT}`);
    
})
