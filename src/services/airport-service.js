const { AirportRepository }= require("../repository/index");


class AirportService{
    constructor(){
        this.airportRepository=new AirportRepository();
    }
      
    async createAirport({name,cityId}){
        try {
            const Airport = await this.airportRepository.createAirport({name,cityId});
            return Airport;
        } catch (error) {
            console.log("Something went wrong in Service Layer");
            throw {error};
        }
    }
    async deleteAirport(id){
        try {
            const res= await this.airportRepository.deleteAirport(id);
            return res;
        } catch (error) {
            console.log("Something went wrong in Service Layer");
            throw {error};
        }
    }

    async updateAirport(id, data){
        try {
            const Airport = await this.airportRepository.updateAirport(data,id);
            return Airport;
        } catch (error) {
            console.log("Something went wrong in Service Layer");
            throw {error};
        }
    }
    async getAirport(id){
        try {
            const airport=await this.airportRepository.getAirport(id);
            return airport;
        }
        catch (error) {
            console.log("Something went wrong in Service Layer");
            throw {error};
        }
    }
}

module.exports=AirportService;