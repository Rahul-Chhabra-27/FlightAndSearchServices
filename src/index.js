const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/SeverConfig');
const CityRepository = require('./repository/city-repository');

const router = require('./routes/index');

const {City, Airport } = require('./models/index');

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api',router);
    
    app.listen(PORT, async () => {
        console.log(`Server is started at port ${PORT}`);
    })
}
setupAndStartServer(); 