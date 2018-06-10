const fs = require('fs');
const path = require('path');
const db_path = path.join(__dirname, '/database.json');




function getProducts() {
    if (fs.existsSync(db_path) === false) {
        FS.writeFileSync(db_path, '[]');
        return [];
    }

    let json = fs.readFileSync(db_path).toString() || '[]';
    return JSON.parse(json);
}

function saveProducts(products) {
    let json = JSON.stringify(products);
    fs.writeFileSync(db_path, json);
}

module.exports.products = {};

module.exports.products.getAll = getProducts;

module.exports.products.add = (product) => {
    let products = getProducts();
    product.id = products.length + 1;
    products.push(product);
    saveProducts(products);
};

module.exports.products.findByName = (name) => {
    let products = getProducts();

    for (let product of products) {
        if (product.name === name) {
            return product;
        }
    }

    return null;
};

module.exports.products.filterByQuery = (query) => {
    let result = [];
    let products = getProducts();

    for (let product of products) {
        if (product.name.toLowerCase().startsWith(query)) {
            result.push(product);
        }
    }

    return result;
};

