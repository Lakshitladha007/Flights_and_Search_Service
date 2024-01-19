const express=require("express");
const CityController=require("../../controllers/city-controller");

const router=express.Router();

//POST
router.post('/city', CityController.create);

//DELETE
router.delete('/city/:id', CityController.destroy);

//GET
router.get('/city/:id', CityController.get);

//PATCH or UPDATE
router.patch('/city/:id', CityController.update);


module.exports=router;