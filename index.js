const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Главная страница");
});

app.get("/about", (req, res) => {
  res.send("О нас");
});

app.post("/product/add", (req, res) => {
  const { id, title, price } = req.body;
  res.send(`Товар успешно добавлен
        Название:${title}
        Цена:${price}
        `);
});

app.post("/reqistration", (req, res) => {
  const { id, name, surname, lastname, numberPhone } = req.body;
  res.send(`Успешно добавлен
        
        Имя:${name},
        Фамилия:${surname},
        Отчество:${lastname},
        Номер телефона:${numberPhone}
        `);
});

app.get("/contacts", (req, res) => {
  res.send("Наши контакты 8999-111-22-33");
});

app.get("/product/:id", (req, res) => {
  console.log(req.params);
  res.send(`Товар с id: ${req.params.id}`);
});

app.get("/phone/:number", (req, res) => {
  console.log(req.params);
  res.send(`Ваш номер телефона: ${req.params.number}`);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на localhost:${PORT}`);
});
