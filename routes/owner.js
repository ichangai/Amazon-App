const router = require('express').Router()
const Owner = require("../models/owner")

// post request = create a new owner

router.post("/owners", async (req, res) => {
    try{
       const owner = new Owner();
       owner.name = req.body.name;
       owner.about = req.body.about;
       owner.photo = req.file.location;

       await owner.save(); //async

       res.json({
        success: true,
        message: "Successfully saved owner"
       });

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})
// Get request - get all owners

router.get('/owners', async (req, res) => {
    try{
       let owners = await Owner.find()

       res.json({
        success: true,
        owners: owners
       })

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

// Get request -  get a single owner

// PUT request - update a single owner

//Delete request - delete a single owner

module.exports = router;

