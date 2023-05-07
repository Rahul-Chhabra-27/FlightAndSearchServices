const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/SeverConfig');
const CityRepository = require('./repository/city-repository');



const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, async () => {
        console.log(`Server is started at port ${PORT}`);

        const repo = new CityRepository();
        try {
            //await repo.createCity({ name:"Agra" })
            // await repo.deleteCity(1);
        }
        catch(error) {
            console.log(error)
        }
    })
}
setupAndStartServer(); 