const { createSimulation } = require('../services/clientService');

const postSimulation = async (req, res, next) => {
  try {
    const { cpf, name, birthdate, contact, cep, bank } = req.body;
    const result = await createSimulation(cpf, name, birthdate, contact, cep, bank);

    return res.status(201).json( result );
  } catch (error) {
    return next(error)
  }
};

module.exports = {
  postSimulation,
};
