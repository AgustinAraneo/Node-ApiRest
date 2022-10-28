const express = require('express');
const app = express();
const port = 3001;

app.get("/", (req, res) =>{
  res.send("<h1>Hola, estoy haciendo pruebas</h1><p>Agustin</p>");
});

app.get("/shop", (req, res) =>{
  res.send("<h1>Agarath Insumos</h1><p>Proximamente...</p>");
});

app.get("/productos", (req, res) =>{
  res.json({
    name: 'Monitor Asus 144hz 24 Pulgadas',
    price: 65000
  });
});

app.listen(port, () =>{
  console.log("My port: " + port);
});
