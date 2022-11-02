const express = require('express');

const router = express.Router();

//Listado de EMPLEADOS

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Agustín',
      lastname: 'Araneo',
      rol: 'Empleador',
    },
    {
      name: 'Ricardo',
      lastname: 'Fort',
      rol: 'Tesorero',
    },
    {
      name: 'Bruce',
      lastname: 'Willis',
      rol: 'Deposito',
    },
    {
      name: 'Anibal',
      lastname: 'Pachano',
      rol: 'Deposito',
    },
  ]);
});

//Listado de roles de EMPLEADOS

router.get('/rolId', (req, res) => {
  const { rolId } = req.params;
  res.json([
    {
      rolId,
      categoria: 'Empleador',
      personas: [
        {
          name: 'Agustín',
          lastname: 'Araneo',
        },
      ],
    },
    {
      rolId,
      categoria: 'Tesorero',
      personas: [
        {
          name: 'Ricardo',
          lastname: 'Fort',
        },
      ],
    },
    {
      rolId,
      categoria: 'Deposito',
      personas: [
        {
          name: 'Bruce',
          lastname: 'Willis',
        },
        {
          name: 'Anibal',
          lastname: 'Pachano',
        },
      ],
    },
  ]);
});

module.exports = router;
