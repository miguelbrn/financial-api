const express = require('express');
const axios = require('axios').default;
const { postSimulation } = require('./controllers/clientsController');
const { clientValidate } = require('./middlewares/clientMiddleware');
const errors = require('./errors/errors');

const app = express();

app.use(express.json());

app.post('/client/simulation', clientValidate, postSimulation );
app.use(errors);

axios.get('http://www.themealdb.com/api/json/v1/1/random.php')
  .then((response) => {
    console.log(response.data.meals);
  })

module.exports = app;
