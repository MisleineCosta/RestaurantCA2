//dependencies
const express = require('express'),
    
router = express.Router();

//Product routes CRU
productCtrl = require('/product-controller');
//CREATE USER/ products are the table find on the collection
router.post('/product', productCtrl.createProduct);
//READ all
router.get('/product', productCtrl.getProducts);
// //FIND USER BY id
// router.get('/products/:id', productCtrl.getProduct);
// //UPDATES USER BY id
// router.put('/products/:id', productCtrl.updateProduct);
// //DELETE USER BY id
// router.delete('/products/:id', productCtrl.deleteProduct);
//EXPORTS
module.exports = router;