const path = require('path');
const express = require('express');

const adminController = require('../controllers/adminController');

const router = express.Router();

// const addProduct = require('../views/add-product.html');

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/products', adminController.getProducts);

module.exports = router;