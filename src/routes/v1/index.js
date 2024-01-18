const express=require("express");
const CityController=require("../../controllers/city-controller");

const router=express.Router();

//POST
router.post('/city', CityController.create);

module.exports=router;