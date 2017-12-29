require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')

const app = express();

// app.use( express.static( `${__dirname}/../build`));

app.use(bodyParser.json());


const PORT = 3005;
app.listen(PORT, console.log(`Listening on port ${PORT}`))