const express = require('express');
const { postSimulation } = require('./controllers/clientsController');
const { clientValidate } = require('./middlewares/clientMiddleware');
const errors = require('./errors/errors');

const app = express();

app.use(express.json());

app.post('/client/simulation', clientValidate, postSimulation );
app.use(errors);

module.exports = app;
