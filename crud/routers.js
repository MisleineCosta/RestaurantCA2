// getting the express package
const express = require('express') 
// getting the model
const Price = require('./models/price') 
const router = express.Router()

// difining the route carparts new and rendering the static page. And a form is used to pass the user input to the api.
router.get('/new', (req, res) => {
// user input is passed to the database collection model.    
    res.render('price/new-price', { part: new Price() })
})
// defining new route to edit a menu price.
router.get('/edit/:id', async (req, res) => {
// passing the user selected id to the database collection and the document is found using, id and render to the edit page all the user selected id's data.
    const price = await Price.findById(req.params.id) 
    res.render('price/edit-price', { price: price })
})


// getting a menu part details from database collection using id
router.get('/:id', async (req, res) => {
    const price = await Price.findById()
// checking if price is null. if true sending a status code 404 and a error message.
    if (price == null) { 
        return res.status(404).json({ message: 'Cannot find Car Price by id' })
    }
 // redirect user to the homepage after the id is found   
    res.redirect('/')

})

// creating new record. Post is used to create a new record with the information submited in the user in the form.
router.post('/', async (req, res, next) => {
// this is passed on to the database schema and new record is created. 
    req.price = new Price.next() 

},
// calling the function to create new record
    savePriceAndRedirect('new')) 

// put is used to update a record in the collection, a put request is sent using the document id to the database and the document 
router.put('/:id', async (req, res, next) => {
 // finding the document with the help of id request by user.   
    req.price = await Price.findById(req.params.id) 
    next()

},
// calling the function to edit the document 
    savePriceAndRedirect('edit')) 

//delete request is used to deleted a document. Gtting the document id from the user
router.delete('/:id', async (req, res) => {
//finding the document and deleting the document from the collection
    await Price.findByIdAndDelete(req.params.id)
    res.redirect('routers/prices')// rediricting the user to products page.
})
//this function is used to pass all the user input to schema to create/ update
function savePriceAndRedirect(path) { 
    return async (req, res) => {
        let price = req.price
        price.name = req.body.priceName
        price.description = req.body.Description
        price.price = req.body.Price
        try {
// everything is saved to the database collection            
            price = await price.save() 
// redirect user to the product page.
            res.redirect(`routers/prices`)
        } catch (e) {

// sending a status code 400 if we have a bad request.
            return res.status(400).json({ message: 'Validation fail for the request' }) 
        }
    }
}

module.exports = router