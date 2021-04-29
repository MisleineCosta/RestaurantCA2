const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
// const productRouters = require('./api/routers/products');
// const orderRouters = require('./api/routers/orders');

app.listen(6000, () => console.log('Server Started'))