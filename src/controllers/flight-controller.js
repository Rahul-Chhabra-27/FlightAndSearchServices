const { FlightService }  = require('../service/index');

const flightService = new FlightService();

const create = async(req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success : true,
            error:{},
            message :"Successfully created a flight"
        })
    } catch (error) {
        return res.json({
            data:{},
            success : false,
            errror:error,
            message :"Not able to create a flight",
        })
    }
}

module.exports = {
    create,
}