const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Price = require('./models/price')

//const views = require('./models')
//const viewsRouter = require('./routes/view')
//const methodOverride = require('method-override')


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('From mongoDB: Connected to Database'))

app.set('view engine', 'ejs')
app.use(express.static('views/menu'))

app.use('/price', (req, res) => {
   
})
//app.use(methodOverride('_method'))
//app.use(express.json({ extended: false }))

//const pricesRouters = require('./routers/prices');
//const orderRouters = require('./api/routers/orders');

app.get('/', async (req, res) => {
  const prices = await Price.find();


    res.render('menu/index', { prices: prices })
})

app.listen(5000, () => console.log('Server Started'))