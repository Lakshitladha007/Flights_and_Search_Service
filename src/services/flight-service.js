const {FlightRepository, AirplaneRepository }=require("../repository/index");
const { compareTime }=require("../utils/helper")

class FlightService{

  constructor(){
    this.airplaneRepository=new AirplaneRepository();
    this.flightRepository=new FlightRepository();
  }

    async createFlight(data){
          try {
            if(!compareTime(data.arrivalTime, data.departureTime)){ // assuring arrival time should be greater than departure time
              throw {error:"Arrival Time cannot be less than departure time"};
            }
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            console.log(airplane.capacity);
            const flight=await this.flightRepository.createFlight({      // 'airplane.capacity' gives us the totalSeats
              ...data, totalSeats:airplane.capacity                 // we add this 'totalSeats' propert to data object, as it was not present in it 
            });
          
            return flight;
          } catch (error) {
            console.log("Something went wrong in service layer");
            throw {error};
          }
    }

    async getAllFlightData(data){
      try {
        const flights= await this.flightRepository.getAllFlights(data);
        return flights;
      } catch (error) {
        console.log("Something went wrong in service layer");
        throw {error};
      }
    }
}

module.exports=FlightService;

/** 

The data that we are going to get from controller layer is going to contain:
data={
 flightNumber,
 airplaneId,
 departureAirportId,
 arrivalAirportId,
 arrivalTime,
 departureTime,
 price,
 totalSeats(We won't get totalSeats, this we need to fetch from Airplane only)
}

*/

/**
 *  All the business logic should always be written inside service layer.
 * Example=> 1.arrival time should be greater than departure time
 *           2. we can also keep a check on arrival date and departure date
 * 
 */
 
