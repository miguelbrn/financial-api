const axios = require('axios').default;
const clientsService = require('../services/clientService');

const urlAuth = `https://apihml.mercantil.com.br:8443/auth/oauth/v2/token?grant_type=client_credentials&client_id=l76965956ba0d5
4bcba807b932bb304596&client_secret=1e11cd05f85b476c8f8aeb37c03bfa90`;

const getFgtsByCpfClient = async (req, res) => {
  try {
  const { cpf, name, birthdate, contact, cep, bank } = req.body;
  const { dataValues } = await clientsService.create(cpf, name, birthdate, contact, cep, bank);
  
  // const token = await axios.post(urlAuth);
  // console.log(token, 'token')

  return res.status(201).json( dataValues );
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
};

module.exports = {
  getFgtsByCpfClient,
};
