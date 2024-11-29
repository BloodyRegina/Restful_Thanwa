const express  = require('express')
const app = express.Router()
// import product.controller
const controller = require('../controllers/product.controller')
// define routes here
// match localhost:4000/products
app.get("/", controller.get)
// match GET localhost:4000/product/[id]
app.get("/:id",controller.getById)
app.post("/",controller.create)

app.post("/",)
module.exports = app