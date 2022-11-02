const express = require('express');
const app = express();
const routerApi = require('./routes');
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hola, estoy haciendo pruebas</h1><p>Agustin</p>');
});

app.get('/shop', (req, res) => {
  res.send('<h1>Agarath Insumos</h1><p>Proximamente...</p>');
});

routerApi(app);

app.listen(port, () => {
  console.log('My port: ' + port);
});
