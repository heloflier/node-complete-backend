const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// const addProduct = require('../views/add-product.html');

router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render(
        'add-product',
        {
            pageTitle: 'Add Products',
            path: '/admin/add-product',
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true
        }
    );
});

router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;