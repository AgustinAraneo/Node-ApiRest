const express = require('express');

const router = express.Router();

//Identificador de CATEGORIAS

router.get('/:categoriasId', (req, res) => {
  const { categoriasId } = req.params;
  res.json({
    categoriasId,
    categoria: 'Monitores',
    products: [
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
    ],
  });
});

//Listado de CATEGORIAS

router.get('/', (req, res) => {
  const { categoriasId } = req.params;
  res.json([
    {
      categoriasId,
      categoria: 'Monitores',
      products: [
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
      ],
    },
    {
      categoriasId,
      categoria: 'Mouses',
      products: [
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
      ],
    },
  ]);
});

module.exports = router;
