const Product = require('../models/product');

exports.getAddProduct = (req, res) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render(
        'admin/edit-product',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            editing: false
        }
    );
};

exports.postAddProduct = (req, res) => {
    console.log('req.body: ', req.body);
    const { nyutitle, imageUrl, price, description } = req.body;
    const product = new Product(null, title, imageUrl, price, description);
    product.save();
    res.redirect('/');
};

exports.getEditProduct = (req, res) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    };

    const { productId } = req.params;
    Product.findById(productId, product => {

        if (!product) {
            return res.redirect('/');
        };

        res.render(
            'admin/edit-product',
            {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                editing: editMode,
                product
            }
        );
    });
};

exports.postEditProduct = (req, res) => {
    const {
        productId,
        title,
        imageUrl,
        price,
        description
    } = req.body;

    const updatedProduct = new Product(productId, title, imageUrl, price, description);
    updatedProduct.save();
    res.redirect('/');
};

exports.getProducts = (req, res) => {
    const products = Product.fetchAll(products => {
        res.render('admin/products', {            // handlebars and ejs only
            products,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
};