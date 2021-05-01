const express = require('express');
const app = express()
const mongoose = require('mongoose');
const Price = require('./models/price');
const morgan = require('morgan');
//const priceRouters = require("./routers/prices");

//const views = require('./models')
//const viewsRouter = require('./routes/view')
//const methodOverride = require('method-override')


mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('From mongoDB: Connected to Database'));

app.set('view engine', 'ejs')
app.use(express.static('views/menu'));

app.use('/price', (req, res) => {
   
});
//app.use(methodOverride('_method'))
//app.use(express.json({ extended: false }))

//const pricesRouters = require('./routers/prices');
//const orderRouters = require('./api/routers/orders');

app.get('/', async (req, res) => {
    const prices = await Price.find();


    res.render('menu/index', { prices: prices });
});

app.listen(8000, () => console.log('Server Started'));
 //module.exports = app;


///////////////////////////// I could not make it works/////////////////////////
// const express = require("express");
// const app = express();
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// const productRoutes = require("./routers/prices");
// //const orderRoutes = require("./api/routes/orders");


// mongoose.connect(uri, options).then(() => {
//     "mongodb://new-user:" +
//         process.env.MONGO_ATLAS_PW +
//         "@costa.xrtym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     {
//         useNewUrlParser: true
//     },
//         mongoose.Promise = global.Promise,
        
//         app.use(morgan("dev"));
//     app.use(bodyParser.urlencoded({ extended: false }));
//     app.use(bodyParser.json());

//     app.use((req, res, next) => {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header(
//             "Access-Control-Allow-Headers",
//             "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//         );
//         if (req.method === "OPTIONS") {
//             res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//             return res.status(200).json({});
//         }
//         next();
//         // Routes which should handle requests
//         app.use("/prices", priceRoutes);
//         //app.use("/orders", orderRoutes);

//         app.use((req, res, next) => {
//             const error = new Error("Not found");
//             error.status = 404;
//             next(error);
//         });

//         app.use((error, req, res, next) => {
//             res.status(error.status || 500);
//             res.json({
//                 error: {
//                     message: error.message
//                 }
//             });
//         });
//     });
// });
//     module.exports = app;

    
