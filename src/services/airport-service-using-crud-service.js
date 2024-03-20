const CrudService=require("./crud-service");
const { AirportRepo }= require("../repository/index");

class AirportServ extends CrudService{
    constructor(){
        const airportRepository=new AirportRepo();
        super(airportRepository);
    }
}

module.exports= AirportServ;