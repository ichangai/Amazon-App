const router = require('express').Router()
const Product = require("../models/product")

const upload = require("../middlewares/upload-photo")

// post request = create a new product

router.post("/products", upload.single("photo"), async (req, res) => {
    try{
       let product = new Product();
       product.title = req.body.title;
       product.description = req.body.description;
       product.photo = req.file.location;
       product.price = req.body.price;
       product.stockQuantity = req.body.stockQuantity;
    //    product.rating = req.body.rating;

       await product.save() //async

       res.json({
        status: true,
        message: "Successfully saved"
       });

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})
// Get requets - get all products

router.get('/products', async (req, res) => {
    try{
       let product = new Product();
       product.title = req.body.title;
       product.description = req.body.description;
       product.photo = req.body.photo;
       product.price = req.body.price;
       product.stockQuantity = req.body.stockQuantity;

       await product.save()

       res.json({
        status: true,
        message: "Successfully saved"
       })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

// Get request -  get a single product

// PUT request - update a single product

//Delete request - delete a single product

module.exports = router;

