const homeHandler = require('./home.js');
const filesHandler = require('./static-files.js');
const productHandler  = require('./product.js');

module.exports = [ homeHandler, filesHandler, productHandler  ];