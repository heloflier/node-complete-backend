
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));                  // old basic version
    // res.render('shop', { products: products, pageTitle: 'Shop', path: '/' });    
    const products = Product.fetchAll(products => {
        res.render('shop/product-list', {            // handlebars and ejs only
            products,
            pageTitle: 'All Products',
            path: '/products'
        });
    });
};

exports.getIndex = (req, res) => {
    const products = Product.fetchAll(products => {
        res.render('shop/index', {            // handlebars and ejs only
            products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getCart = (req, res) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart'
    });
};

exports.getOrders = (req, res) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};