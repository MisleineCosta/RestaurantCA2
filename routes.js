//dependencies
const express = require('express')   
router = express.Router();

//Price routes CRU
priceCtrl = require('/price-controller');
//CREATE USER/ products are the table find on the collection
router.post('/prices', priceCtrl.createPrice);
router.get('/prices', priceCtrl.getPrices); // to read all data
router.get('/prices/:id', priceCtrl.getPrice); //FIND USER BY id
router.put('/prices/:id', priceCtrl.updatePrice); //UPDATES USER BY id
router.delete('/prices/:id', priceCtrl.deletePrice); //DELETE USER BY id

//EXPORTS
module.exports = router;