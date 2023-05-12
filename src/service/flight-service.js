const { FlightRepository, AirplaneRepository } = require("../repository/index");

class FlightService {
  constructor() {
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }
  async createFlight(flightData) {
    try {
      const airplane = await this.airplaneRepository.getAirplane(
        flightData.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...flightData,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Somethong went wrong in service layer");
    }
  }
}

module.exports = FlightService;