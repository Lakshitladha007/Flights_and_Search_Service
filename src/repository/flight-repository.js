const {Flight}=require("../models/index");
const {Op}=require("sequelize");

class FlightRepository{

  #createFilter(data){
    let filter={};  // creating a filter object which we will return after adding all the filters to this.

    if(data.arrivalAirportId){
      filter.arrivalAirportId=data.arrivalAirportId;
    }

    if(data.departureAirportId){
      filter.departureAirportId=data.departureAirportId;
    }

    // if(data.minPrice && data.maxPrice){ // if both "maxPrice" and "minPrice" are present in "req.query" 
    //   Object.assign(filter, {
    //     [Op.and]:[
    //       {price:{[Op.gte]:data.minPrice}},
    //       {price:{[Op.lte]:data.maxPrice}}
    //     ]
    //   });
    // }

    // if(data.minPrice){
    //   Object.assign(filter,{ 
    //     price:
    //     {[Op.gte]:data.minPrice}
    //   });
    // }

    // if(data.maxPrice){
    //   Object.assign(filter,{ 
    //     price:
    //     {[Op.lte]:data.maxPrice}
    //   });
    // 
  //}
    
    
    // "ARRAY based approach for appling 'priceFilter'"
    
    let priceFilter=[];
    if(data.minPrice){
      priceFilter.push({price:{[Op.gte]:data.minPrice}});
    }
    if(data.maxPrice){
      priceFilter.push({price:{[Op.lte]:data.maxPrice}});
    }
    Object.assign(filter,{[Op.and]:priceFilter});
    
    return filter;
  }

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

  async getFlight(flightId){  // this function is just to get the data of one single flight
    try {
      const flight=await Flight.fingByPk(flightId);
      return flight;
    } catch (error) {
      console.error("Error in fetching a flight:", error);
      throw {error};
    }
  }

  async getAllFlights(filter){  // this function is to get all the flights corresponding to the passed filter
    try {
      const filterObject= this.#createFilter(filter); 
      const flight=await Flight.findAll({
        where:filterObject
      });
      return flight;
    } catch (error) {
      console.error("Error in fetching a flight:", error);
      throw {error};
    }
  }

  
}

module.exports=FlightRepository;

/**  => filter object is going to like the object which is written inside 'where' clause
    {
       where: {
        arrivalAirportId:2,
        departureAirportId: 4,
        price:{[Op.gte]:4000}
       }
    }
 */