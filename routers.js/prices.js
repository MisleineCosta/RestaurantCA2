const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); // to import mongoose

const price = require("../models/price");
//GET method
router.get("/", (req, res, _next) => {
    price.find() // If I do not pass a arguments, it will find all elements. 
        .exec()// to GET a true prompts. 
        .then(docs => { // .then block has all my products.
            console.log("From database 😁", docs); // to return them. 
            //   if (docs.length >= 0) { // to check within the array in case of the error.
            res.status(200).json(docs);
            //  } else {
            //      res.status(404).json({ 
            // if it so, return "No entries found on database".
            //   message: "No entries found upon database 😲"
            //    });        
            //  }
        })
        .catch(err => { // to GET any errs
            console.log("From database", err); // to return any errs
            res.status(500).json({
                error: err

            });
        });
});

/* I do not need this code for product anymore, because I set up the request product code onto line 19. 
This👇🏼 can be removed.
router.post('./', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    */

// To Create Price Object - with helps of mongoose.
router.post("./", (req, res, _next) => {
    const price = new price({
        _id: new mongoose.Types.ObjectId(), // It create auto Id for me that will be a unique Id wich I cannot get it twice. 
        name: req.body.name, // add name of curse this name will be request body's name and set up price what request body's price of product.
        price: req.body.price,
    });
    // Creating special object call product.save - Save it's a method provided by mangoose to use on mongosse models. 
    // it will then store this in the DB.
    price
        .save()
        .then(result => {
            console.log("From database 🤓", result);// I do not need exec() for save(). I will later use it though. 
            res.status(201).json({ //Success response back within the success response call-back👇🏼
                message: "Handling POST requests to /products",
                createPrice: result
            });
        })
        .catch(err => {
            console.log("From database", err);
            res.status(500).json({ //This sends a different response, if something fails, we will see it too.
                error: err
            })
        });
    // To Check return of Data - GET the product of ID. For that I will comment the damic code below👇🏼.
    router.get("/:priceId", (req, res, _next) => {
        const id = req.params.priceId;
        /*  if (id == "special") {
            res.status(200).json({
               massage: "You discovered the special ID",
                    id: id
                   });
           } else {
               res.status(200).json({
               message: "You passed an ID"
                           
               });
           }
           and instead that👆🏼 I will use the new priceModel called findBy. It was imported on the top - (line 5). */
        price.findBy(id)
            .exec()// To send response when I get the DB. 
            .then(doc => { // To send response when I get the DB.
                console.log("From database 😉", doc); //simple logged to the console
                // Send response from inside the .then(doc). Also, from the catch .log
                if (doc) {
                    res.status(200).json(doc);
                } else {
                    res.status(404).json({ message: "No valid entry found for provided ID 😲" });
                }
            })
            .catch(err => { // to get any errs
                console.log("From database", err); // for logging to the console.
                res.status(500).json({ error: err }); // to send .json response. The status of this code is 500 thought, if something fails in the DB.
            });
    });
    // set up the method call pricetId
    router.patch("/:pricetId", (req, res, next) => {
        const id = req.params.pricetId;
        const updateOps = {}; // to update Operations
        for (const ops of req.body) { // loop through all the Ops of my request body.
            // array here👇🏼 to pass data
            updateOps[ops.propName] = ops.value;
        }
        price.update({ _id: id },
            {
                $set: updateOps
            }) // No key value parse, we must change the name /or the price.
            //   { name: req.body.newName, 
            //   price: req.body.newPrice // to use the Product model + update method. 
            .exec()
            .then(result => {
                console.log("From database 😃", result);
                res.status(200).json(result); // the data will be sent back
            })
            .catch(err => {
                console.log("From database", err);
                res.status(500).json({// it return the errors to the user.
                    error: err
                });
            });

        router.delete("/:priceId", (req, res, next) => {
            // res.status(200).json({
            //message: "Deleted price!"
            const id = req.params.priceId; // it GETs the Id from my URL
            price.remove({ _id: id })// it removes value from the collection. 
                .exec()
                .the(result => {
                    res.status(200).json(result);
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    })
                });
        });
        module.exports = router;
      })
});