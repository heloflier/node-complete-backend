const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
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
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));                  // old basic version
    // res.render('shop', { products: products, pageTitle: 'Shop', path: '/' });    
    const products = Product.fetchAll(products => {
        res.render('shop', {            // handlebars and ejs only
            products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });

};