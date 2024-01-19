//repository layer is responsible for commuicationg with any data source such as Database or anything else.

const { City }=require('../models/index');     //In order to assure city repository and all works fine, we need to have access to the models. So we are requiring models. 
                                               // We will add the path of 'index' file as it will give access to all the models 
                                               //present in the folder, as "index" file contains logic due to which all models 
                                               //can be accessed form it
class CityRepository{

    async createCity({name}){
        try {
            const city=await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in respository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try {
            const res=await City.findByPk(cityId);
            if(res!=null){
                
             const response=await City.destroy({
                 where:{
                    id:cityId,
                }
             });
             return response;
            }
            else{
                console.log("Something went wrong in repository layer");
                throw {error};
            }
            // const response=await City.destroy({
            //     where:{
            //         id:cityId,
            //     }
            // });
        } catch (error) {
            console.log("Something went wrong in respository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){  /// data is: `{name:"Delhi"}`
        try {
            const city=await City.update(data,{
                where:{
                    id:cityId,
                }
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in respository layer");
            throw {error};
        }
    }
 
    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in respository layer");
            throw {error};
        }
    }

  
}

module.exports=CityRepository;