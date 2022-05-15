const express = require('express');
require('dotenv').config();
const { json, urlencoded } = require('body-parser');
const fileUpload = require('express-fileupload');
const ConnectRouter = require ('./routes/main-router');



console.log("Starting Application...") ;

const app = express();

app.use(express.static('files'));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(fileUpload());

app.get('/test', (req, res) => {
    res.json ({
        messaggio: 'everything ok'
    }).send();
});

ConnectRouter(app);

app.listen(9000);