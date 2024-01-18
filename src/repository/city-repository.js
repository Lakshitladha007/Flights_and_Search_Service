const { City }=require('../models/index');

class CityRepository{
    async createCity({name}){
        try {
            const city=await City.create({name});
            return city;
        } catch (error) {
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const response=await City.destroy({
                where:{
                    id:cityId,
                }
            });
            return response;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports=CityRepository;