// Middlewares are just simple functions that help us to filter out the requests from users which does not 
// abide the API contracts. Middlewares are functions which have access to request object and response object, 
// and the next middleware.

const { ClientErrorCodes }=require("../utils/error-codes");
const validateCreateFlight= (req, res, next) => { // If any of the property which is mandatory for creating a 
                                                  // flight is not present than techinally we should not allow the
                                                  // request to go further because eventually it is going to fail
    if( !req.body.flightNumber ||
        !req.body.airplaneId  ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.departureTime ||
        !req.body.arrivalTime ||
        !req.body.price
    ){  // if any of the body params is missing we come inside the if check
        return res.status(ClientErrorCodes.BAD_REQUEST).json({ // '400' is for bad request i.e. our request body does not follows API 
                                      // contract
            data:{},
            success: false,
            message: "Invalid request body for create flight",
            err: "Missing mandatory properties to create a flight"
        })
    }

    next(); // If above if check is not executed we will just call the next middleware
}

module.exports={
    validateCreateFlight
}