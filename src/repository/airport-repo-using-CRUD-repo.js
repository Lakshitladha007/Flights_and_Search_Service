const CrudRepository = require("../repository/crud-repository");
const { Airport }= require("../models/index");

class AirportRepo extends CrudRepository{
    constructor(){
        super(Airport);
    }
}

module.exports=AirportRepo;