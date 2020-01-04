const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');
const pathToDataFile = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // fetch previous cart
        fs.readFile(pathToDataFile, (err, data) => {
            let cart = { products: [], totalPrice: 0 };

            if (!err) {
                cart = JSON.parse(data);
            }
            // Analyze cart => find existing product
            const existingProductIndex = cart.products.findIndex(product => id === product.id);
            const existingProduct = cart.products[existingProductIndex];

            let updatedProduct;

            // Add new product / increase qty.
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty += 1;
                // cart.products = [ ...cart.products ];   //TODO: this line may be redundant. Try to delete it
                cart.products[existingProductIndex] = updatedProduct;
            }
            else {
                updatedProduct = { id, qty: 1 };
                cart.products = [ ...cart.products, updatedProduct ];
            };

            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(pathToDataFile, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }
}