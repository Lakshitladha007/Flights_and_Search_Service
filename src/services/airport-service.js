const { AirportRepository }= require("../repository/index");


class AirportService{
    constructor(){
        this.airportRepository=new AirportRepository();
    }
      
    async createAirport(obj){
        try {
            const Airport = await this.airportRepository.createAirport({name:obj.name,cityId:obj.cityId});
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

    async updateAirport({name,id}){
        try {
            const Airport = await this.airportRepository.updateAirport({name,id});
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