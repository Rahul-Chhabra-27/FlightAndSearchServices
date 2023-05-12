const { Flights }  = require('../models/index');
class FlightRepository {
    async createFlight(flightData) {
        try {
            const flight = await Flights.create(flightData);
            return flight;
        } catch (error) {
            console.log("Somethign went wrong in Repo layer");
            throw {error};
        }
    }
}
module.exports = FlightRepository;