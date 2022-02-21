const getFgtsByCpfClient = (req, res) => {
  try {
  const {cpf, name, birthdate, cep, number, bank } = req.body;
  
  return res.status(200).json({ message: cpf})
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
};

module.exports = {
  getFgtsByCpfClient
};
