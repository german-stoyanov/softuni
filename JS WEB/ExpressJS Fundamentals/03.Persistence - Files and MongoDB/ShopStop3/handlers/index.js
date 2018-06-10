const homeHandler = require('./home.js');
const filesHandler = require('./static-files.js');
const productHandler  = require('./product.js');
const categoryHandler = require('./category.js')

module.exports = [ homeHandler, filesHandler, productHandler,categoryHandler  ];