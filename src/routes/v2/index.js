const express=require("express");
const AirportController=require("../../controllers/airport-controller");

const router=express.Router();

//POST
router.post('/airport', AirportController.create);

//DELETE
router.delete('/airport/:id', AirportController.destroy);

//GET
router.get('/airport/:id', AirportController.get);


//PATCH or UPDATE
router.patch('/airport/:id', AirportController.update);

module.exports=router;