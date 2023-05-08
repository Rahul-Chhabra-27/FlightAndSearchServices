const { CityService } = require("../service");

const cityService = new CityService();

const createCity = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : 'Successfully created a city',
            err : {}
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data : {},
            success : false,
            message : 'Not able to create a city',
            err : error,
        })
    }  
}

const deleteCity = async(req,res) => {
    try {
      const city = await cityService.deleteCity(req.params.id);
      return res.status(200).json({
        data: city,
        success: true,
        message: "Successfully deleted a city",
        err: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to delete the city",
        err: error,
      });
    }  
}

const getCity = async(req,res) => {
    try {
      const city = await cityService.getCity(req.params.id);
      return res.status(200).json({
        data: city,
        success: true,
        message: "Successfully fetched the city",
        err: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to fetched the city",
        err: error,
      });
    }  
}

const updateCity = async(req,res) => {
    try {
      const city = await cityService.updateCity(req.params.id,req.body);
      return res.status(200).json({
        data: city,
        success: true,
        message: "Successfully updated a city",
        err: {},
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Not able to update a city",
        err: error,
      });
    }  
} 

const getAllCities = async(req,res) => {
  try {
    const filter = req.query; 
    const cities = await cityService.getAllCities(filter);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fecthed all the cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch all the cities",
      err: error,
    });
  }  
} 
module.exports = {
    createCity,updateCity,getCity,deleteCity,getAllCities
}