const {Flight}=require("../models/index");

class FlightRepository{

  async createFlight(data){
    try {
        const flight= await Flight.create(data);
        console.log("Flight created successfully:", flight);
        return flight;
    } catch (error) {
      console.error("Error creating flight:", error);
       throw {error};
    }
  }
}

module.exports=FlightRepository;