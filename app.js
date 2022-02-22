const express = require('express');
const { getFgtsByCpfClient } = require('./controllers/clientsController');
const { clientValidate } = require('./middlewares/clientMiddleware');
const errors = require('./errors/errors');

const app = express();


app.use(express.json());

app.post('/client', clientValidate, getFgtsByCpfClient );
app.use(errors);

module.exports = app;
