const { AirportServ }=require("../services/index");

const airportService = new AirportServ();

const create= async (req, res)=>{
    try{
        const response=await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            success:true,
            message:"Successfully created the airport",
            err:{}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            messgae:"Not able to create a new airport",
            err: error
        })
    }
    
}


module.exports={
    create,
}