const mongoose = require("mongoose")

const priceSchema = new mongoose.Schema({

name: {
type: String,
required: true

},

description: {
type: String,
required: true
},

price: {
type: String,
required: true
}

})
module.exports = mongoose.models('price', priceSchema);  // passing the model to the collection

