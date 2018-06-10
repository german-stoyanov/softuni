const homeHandler = require('./home.js');

const productHandler  = require('./product.js');
const categoryHandler = require('./category.js')

module.exports = { home:homeHandler, product:productHandler,category:categoryHandler  };