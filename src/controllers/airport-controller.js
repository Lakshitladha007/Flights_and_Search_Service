const {AirportService}=require("../services/index");

const airportService=new AirportService();

/** 
  POST
  data--> req.body
*/
const create= async (req, res)=>{
    try{
        const airport=await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success:true,
            message:"Successfully created a airport",
            err:{}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            messgae:"Not able to create a airport",
            err: error
        })
    }
}

//DELETE ->/city/:id
const destroy= async (req, res)=>{
    try{
        const resp=await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: resp,
            success:true,
            message:"Successfully deleted a airport",
            err:{}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            messgae:"Not able to delete a airport",
            err: error
        })
    }
}

//GET --> /city/:id
const get= async (req, res)=>{
    try{
        const airport=await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data: airport,
            success:true,
            message:"Successfully fetched a airport",
            err:{}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            messgae:"Not able to fetch a airport",
            err: error
        })
    }
}

//PATCH --> /city/:id
const update= async ( req, res)=>{
    try{
        const airport=await airportService.updateAirport(req.body,req.params.id);
        return res.status(200).json({
            data: airport,
            success:true,
            message:"Successfully updated a airport",
            err:{}
        });
    } catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            sucess:false,
            messgae:"Not able to update a airport",
            err: error
        })
    }
}


module.exports={
    create,
    destroy,
    get,
    update
}