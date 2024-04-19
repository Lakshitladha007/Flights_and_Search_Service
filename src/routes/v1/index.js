const express=require("express");
const CityController=require("../../controllers/city-controller");
const FlightController=require("../../controllers/flight-controller");
const AirportController= require("../../controllers/airport-crud-controller");
const { FlightMiddlewares } =require("../../middlewares/index");

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


router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create);
router.get('/flights',FlightController.getAll);
router.get('/flights/:id',FlightController.get);
router.patch('/flights/:id', FlightController.update)

router.post('/airports', AirportController.create);


module.exports=router;