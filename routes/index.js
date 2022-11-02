const express = require('express');

const productosRouter = require('./productos');
const categoriasRouter = require('./categorias');
const empleadosRouter = require('./empleados');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/productos', productosRouter);
  router.use('/categorias', categoriasRouter);
  router.use('/empleados', empleadosRouter);
}

module.exports = routerApi;
