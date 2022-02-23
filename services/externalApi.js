const axios = require('axios');

const baseUrl = `https://apihml.mercantil.com.br:8443/auth/oauth/v2`
const dataHeader = {};

const getData = async (cpf) => {
  const getSaldoUrl = `${baseUrl}/Clientes/${cpf}/SaquesAniversario/Saldo`
  try {
    const token = await getToken()
    console.log(token)
    const response = await axios.get(getSaldoUrl, dataHeader, {
    headers: {
      'Authorization': token
    },
  });

  const data = response.json()
  return data;
  } catch (error) {
    console.log(error)
  }
}

const getToken = async () => {
  const getTokenUrl = `${baseUrl}/token?grant_type=client_credentials&client_id=l76965956ba0d54bcba807b932bb304596&client_secret=1e11cd05f85b476c8f8aeb37c03bfa90`
  try {
    const { data: { access_token } } = await axios.post(getTokenUrl, dataHeader, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    })
    
    return access_token
  } catch (error) {
    console.log(error)
  };
};

getData(12163879402)

module.exports = getData;
