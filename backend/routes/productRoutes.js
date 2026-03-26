const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create sample product data route (for initial database population)
router.post('/seed', async (req, res) => {
  try {
    const defaultProducts = [
      { name: 'Truffle Chocolate', price: 45.99, rating: 4.8, flavor: 'Chocolate', category: 'Birthday Masks', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80', description: 'Premium Truffle Chocolate Cake' },
      { name: 'Strawberry Dream', price: 39.99, rating: 4.5, flavor: 'Strawberry', category: 'Birthday Masks', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80', description: 'Fresh Strawberry Cream Cake' },
    ];
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(defaultProducts);
    res.status(201).json(createdProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
