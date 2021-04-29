const mongoose = require('mongoose');

const priceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
    
});

module.exports = mongoose.model('price', priceSchema);