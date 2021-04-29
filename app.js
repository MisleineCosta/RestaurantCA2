const express = require('express')
const app = express()
const mongoose = require('mongoose')
//const static = require('./models/static')
//const staticRouter = require('./routes/static')
//const methodOverride = require('method-override')


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.set('view engine', 'ejs')
app.use(express.static('views'))
//app.use(methodOverride('_method'))
//app.use(express.json({ extended: false }))

//const productRouters = require('./api/routers/products');
//const orderRouters = require('./api/routers/orders');

app.get('/', (req, res) => {

    res.render('index')

})

app.listen(8000, () => console.log('Server Started'))