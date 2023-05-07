const { CityRepository } = require('../repository/index');

class CityService {

    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity({name}){
        try {
            const city = await this.cityRepository.createCity({name});
            return city;
        } catch (error) {
            console.log("Error inside service layer")
        }
    }

    async deleteCity(cityId) {
        try {
          const city = await this.cityRepository.deleteCity(cityId);
          return city;
        } catch (error) {
          console.log("Error inside service layer");
        }
    }

    async updateCity(cityId, {name}) {
        try {
          const city = await this.cityRepository.updateCity(cityId,{ name });
          return city;
        } catch (error) {
          console.log("Error inside service layer");
        }
    }

    async getCity(cityId) {
        try {
          const city = await this.cityRepository.getCity(cityId);
          return city;
        } catch (error) {
          console.log("Error inside service layer");
        }
    } 
}

module.exports = CityService;
