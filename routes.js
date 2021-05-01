//dependencies
const express = require('express')   
router = express.Router();

//Price routes CRU
priceCtrl = require('./price-controller');
//CREATE USER/ products are the table find on the collection
router.post('/prices', priceCtrl.createPrice);
router.get('/prices', priceCtrl.getPrices); // to read all data
router.get('/prices/:id', priceCtrl.getPrice); //FIND USER BY id
router.put('/prices/:id', priceCtrl.updatePrice); //UPDATES USER BY id
router.delete('/prices/:id', priceCtrl.deletePrice); //DELETE USER BY id


var multer = require("multer");

var multer = require("multer");
var upload = multer({ dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./price-controller');

router.post('/prices', upload.single('price'), priceCtrl.uploadPrice);
router.get('/prices', imageCtrl.getPrices);
router.get('/prices/:id', imageCtrl.getPrice);
router.delete('/prices/:id', priceCtrl.deletePrice);

//EXPORTS
module.exports = router;