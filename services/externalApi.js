const axios = require('axios');

const baseUrl = `https://apihml.mercantil.com.br:8443/auth/oauth/v2`

const getData = async (cpf) => {
  const getSaldoUrl = `${baseUrl}/Clientes/${cpf}/SaquesAniversario/Saldo`
  const response = await axios.get(getSaldoUrl, {
    headers: {
      'Authorization': await getToken()
    },
  });

  const data = response.json()
  return data;
}

const getToken = async () => {
  const getTokenUrl = `${baseUrl}/token?grant_type=client_credentials&client_id=l76965956ba0d54bcba807b932bb304596&client_secret=1e11cd05f85b476c8f8aeb37c03bfa90`
  
  const tokenData = await axios.post(getTokenUrl, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    } 
  })
  const { acess_token } = tokenData

  return acess_token
};

module.exports = getData;
