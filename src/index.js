const express = require('express');
const { PORT } = require('./config/ServerConfig');

const setupAndStartServer = async() => {
    const app = express();
    app.listen(PORT,() => {
        console.log(`Server is started at port ${PORT}`);
    })
}
setupAndStartServer();