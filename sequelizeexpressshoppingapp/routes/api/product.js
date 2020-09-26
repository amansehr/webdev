const route = require('express').Router()
const product = require('../../db/connection').product

route.get('/', (req, res) => {
    product.findAll().then((products) => {
        res.status(200).send(products)
    }).catch((err) => {
        res.status(500).send({
            error: "Could not retrieve products"
        })
    })

})

route.post('/', (req, res) => {
    //* Validate the values
    //! isNaN check whether a fn is nan is or not
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "price is not valid number"
        })
    }

    product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price) //! parseFloat b/c in post request every data goes as string

    }).then((products) => {
        res.status(200).send(products)
    }).catch((error) => {
        res.status(501).send({
            error: 'Error adding product'
        })
    })
})

module.exports = {
    route
}