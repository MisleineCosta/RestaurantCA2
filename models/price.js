const mongoose = require('mongoose'); 


const priceSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String, required: true }, 
    price: { type: String, required: true },
    desc: String,
},
   { timestamps: true });


module.exports = mongoose.model('price', priceSchema); 
