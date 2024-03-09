// Initially we are not going to write the CRUD api for Airplane Model, since it is not needed
// We will just write a function that returns a Airplane, beacuse this we will help us to calculate 'totalSeats' corresponding to a Flight

const { Airplane }=require("../models/index");

class AirplaneRepository{

    async getAirplane(airplaneId){
        try {
            const airplane=await Airplane.findByPk(airplaneId);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in respository layer");
            throw {error}; 
        }
    }
}

module.exports=AirplaneRepository;