const express = require('express');

const router = express.Router();

//Listado de PRODUCTOS

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Monitor Asus 144hz 24 Pulgadas',
      price: 65000,
    },
    {
      name: 'Monitor Sentley 75hz Curvo 27 Pulgadas',
      price: 53500,
    },
    {
      name: 'Monitor Gigabyte 240hz 24 Pulgadas',
      price: 97000,
    },
    {
      name: 'Mouse Logitech G305',
      price: 6500,
    },
    {
      name: 'Mouse Razer Viper Mini',
      price: 14350,
    },
    {
      name: 'Mouse Corsair Scimitar Pro',
      price: 20000,
    },
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message: 'not found'
    });
  } else {
    res.status(200).json({
      id,
      name: 'Teclado Genius',
      price: 1700
    });
  };


})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Create',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Update',
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Deleted',
    id,
  })
})

module.exports = router;
