//repository layer is responsible for commuicationg with any data source such as Database or anything else.

const {Op}=require("sequelize");

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
        } catch (error) {
            console.log("Something went wrong in respository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){           // data is: `{name:"Delhi"}`
                                              // passing 2 parameters, 1st to identify which column needs to be updated and 2nd is
                                              // with what data it is be updated
        try{
            //The below approach also works but it will not return updated object
            // if we are using PostgreSql then returning:true can be used, else not

            // const city= await City.update(data, {
            //     where: {
            //         id:cityId
            //     }, 
            //     returning: true,
            //     plain:true
            // });

            //for getting updated data in Mysql we use this approach
            
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
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
    
    async getAllCities(filter){  // filter can be empty also
        try {
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                });  
                return cities;
            }
            else{
            const cities=await City.findAll();
            return cities;
            }
        } catch (error) {
            console.log("Something went wrong in respository layer");
            throw {error};
        }
    }
  
}

module.exports=CityRepository;