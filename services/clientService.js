const { Users, Consults } = require('../models');
const externalData = require('./externalApi')

const createSimulation = async (cpf, name, birthDate, contact, cep, bank) => {
  const {
    ValorEmprestimo,
    ValorTotal,
    QuantidadeParcelas,
    ValorFinanciado
  } = await externalData(cpf);
  
  const { dataValues: { id } } = await Users.create({
    cpf,
    name,
    birthDate,
    contact,
    cep,
    bank,
    totalLending: ValorEmprestimo,
    totalFgts: ValorTotal,
  });
  
  await Consults.create({ userId: id })
  
  return { ValorEmprestimo, ValorTotal, QuantidadeParcelas, ValorFinanciado };
};

module.exports = {
  createSimulation,
}
