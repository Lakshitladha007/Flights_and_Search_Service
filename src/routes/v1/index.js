const express=require("express");
const CityController=require("../../controllers/city-controller");
const FlightController=require("../../controllers/flight-controller");

const router=express.Router();

//POST
router.post('/city', CityController.create);

//DELETE
router.delete('/city/:id', CityController.destroy);

//GET
router.get('/city/:id', CityController.get);
router.get('/city',CityController.getAll);

//PATCH or UPDATE
router.patch('/city/:id', CityController.update);

router.post('/flights',FlightController.create);


module.exports=router;