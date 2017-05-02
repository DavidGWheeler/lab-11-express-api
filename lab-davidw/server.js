'use strict';

const express = require('express');
const morgan = require('morgan');
const jsonParser = require('body-parser').json();

const PORT = process.env.PORT || 3030;
const app = express();
const router = express.Router();

app.use(jsonParser);
app.use(morgan('dev'));

require('./routes/lure-routes')(router);
app.use(router);

app.listen(PORT, () => console.log(`Listening on port, ${PORT}`));

module.exports = app;
