const { Users, Consults } = require('../models');
const wrapper = require('../mock/mercantilWrapperMock');

const createSimulation = async (cpf, name, birthDate, contact, cep, bank) => {
  const { ValorEmprestimo, ValorTotal, QuantidadeParcelas, ValorFinanciado } = wrapper
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
  await Consults.create({
    userId: id,
  })
  return { ValorEmprestimo, ValorTotal, QuantidadeParcelas, ValorFinanciado };
};



module.exports = {
  createSimulation,
}
