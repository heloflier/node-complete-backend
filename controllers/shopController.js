const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));                  // old basic version
    // res.render('shop', { products: products, pageTitle: 'Shop', path: '/' });    
    console.log('shop/product-list---------------------------');
    const products = Product.fetchAll(products => {
        res.render('shop/product-list', {            // handlebars and ejs only
            products,
            pageTitle: 'All Products',
            path: '/products'
        });
    });
};

exports.getProduct = (req, res) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', { 
            product, 
            pageTitle: product.title,
            path: '/products'
        });
    })
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

exports.postCart = (req, res) => {
    const { productId } = req.body;
    Product.findById(productId, (product) => {
        Cart.addProduct(productId, product.price);
    });
    res.redirect('/cart');
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