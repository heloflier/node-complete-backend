const path = require('path');
const express = require('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

// const addProduct = require('../views/add-product.html');

router.get('/add-product', productsController.getAddProduct);

router.post('/add-product', productsController.postAddProduct);

module.exports = router;