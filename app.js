const express = require('express');
const axios = require('axios').default;
const { postSimulation } = require('./controllers/clientsController');
const { clientValidate } = require('./middlewares/clientMiddleware');
const errors = require('./errors/errors');

const app = express();

const baseUrl = `https://apihml.mercantil.com.br:8443/auth/oauth/v2`

const dataHeader = {}

const getToken = async () => {
  const getTokenUrl = `${baseUrl}/token?grant_type=client_credentials&client_id=l76965956ba0d54bcba807b932bb304596&client_secret=1e11cd05f85b476c8f8aeb37c03bfa90`
  try {
    const { data: { access_token } } = await axios.post(getTokenUrl, dataHeader, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    })
    console.log(access_token)
    return access_token
  } catch (error) {
    console.log(error)
  };
};

getToken()

app.use(express.json());

app.post('/client/simulation', clientValidate, postSimulation );
app.use(errors);

module.exports = app;
