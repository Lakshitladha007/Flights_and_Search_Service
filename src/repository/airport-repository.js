const {Airport}=require("../models/index"); // requiring 'Airport' model

// creating an AirportRepository class
class AirportRepository{
     
    async createAirport({name,cityId}){
       try {
        if (!cityId) {
            throw new Error("cityId is required");
        }
        const airport= await  Airport.create({
            name:name,
            cityId:cityId
         });
         return airport;
       } catch (error) {
         console.log("Not able to create an Airport");
         throw {error};
       }
    }

    async deleteAirport(id){
        try {
         const res= await  Airport.destroy({
             where:{
                id:id
             }
          });
          return res;
        } catch (error) {
          console.log("Not able to delete an Airport");
          throw {error};
        }
     }

     async updateAirport(id,data){
        try {
          const airport=await Airport.findByPk(id);
          console.log(airport);
          airport.name=data.name;
          await airport.save(); 
          return airport;
        } catch (error) {
          console.log("Not able to update an Airport");
          throw {error};
        }
     }

     async getAirport(id){
        try {
         const airport= await  Airport.findByPk(id);
          return airport;
        } catch (error) {
          console.log("Not able to get an Airport");
          throw {error};
        }
     }
}

module.exports=AirportRepository;

