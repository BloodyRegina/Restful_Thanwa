const express = require('express')
const app = express()

// get port number from environment settings
require('dotenv').config({ path: './config.env'})
const port = process.env.PORT || 3000

const bodyParser = require('body-parser')
const cors = require('cors')
const productRoute = require('./routes/product.route')

// CORS cross origin resource sharing
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

//path url
// app.[method]()
// match localhost:4000/
app.get("/", (req, res) =>{
    res.send("Sawatdee")
})

app.use("/products", productRoute)

app.listen(port, () => {
    console.log("App started at port: " + port)
})