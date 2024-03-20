const { FlightService }=require("../services/index");
const { SuccessCodes }= require("../utils/error-codes");

const flightService=new FlightService();

const create= async (req, res)=>{
    try {
        const flight=await flightService.createFlight(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success:true,
            message:"Successfully created a flight",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            messgae:"Not able to create a Flight",
            err: error
        })
    }
}

const getAll= async(req,res)=>{
    try {
        const response=await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success:true,
            message:"Successfully fetched the flights",
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            messgae:"Not able to fetch all Flights",
            err: error
        }) 
    }
}

module.exports={
    create,
    getAll
}