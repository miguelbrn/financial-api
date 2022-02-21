const express = require('express');
const app = express();
const {getFgtsByCpfClient } = require('./controllers/clientsController');
const errors = require('./errors/errors');

app.use(express.json());

app.get('/Clientes/:cpf/SaquesAniversario/Saldo', getFgtsByCpfClient );

module.exports = app;
