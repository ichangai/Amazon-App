const router = require('express').Router()
const Category = require("../models/category")

// post request = create a new category

router.post("/categories", async (req, res) => {
    try{
       const category = new Category();
       category.type = req.body.type;

       await category.save(); //async

       res.json({
        success: true,
        message: "Successfully saved category"
       });

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})
// Get request - get all categorys

router.get('/categories', async (req, res) => {
    try{
       let categories = await Category.find()

       res.json({
        success: true,
        categories: categories
       })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

// Get request -  get a single category

// PUT request - update a single category

//Delete request - delete a single category

module.exports = router;

