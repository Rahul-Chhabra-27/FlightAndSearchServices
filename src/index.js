const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/ServerConfig');

const setupAndStartServer = async() => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));
    app.listen(PORT,() => {
        console.log(`Server is started at port ${PORT}`);
    })
}
setupAndStartServer(); 