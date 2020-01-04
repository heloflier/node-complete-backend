const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
const pathToDataFile = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (callback) => {
    fs.readFile(pathToDataFile, (err, data) => {
        if (err) {
            console.log('err: ', err);
            callback([]);
        }
        else callback(JSON.parse(data));
    });
}

module.exports = class Product {
    constructor(id = null, title, imageUrl, price, description) {
        this.id = id,
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
    
    save() {
        getProductsFromFile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;

                fs.writeFile(pathToDataFile, JSON.stringify(updatedProducts), err => {
                    if (err) console.log('err: ', err);
                });
            }
            else {
                this.id = Math.random().toString();
                products.push(this);

                fs.writeFile(pathToDataFile, JSON.stringify(products), err => {
                    if (err) console.log('err: ', err);
                });
            }
        });
    }

    static findById(id, callback) {
        getProductsFromFile(products => {
            const product = products.find(p => id === p.id);
            callback(product);
        });
    };

    static fetchAll(callback) {
        getProductsFromFile(callback);
    }
}