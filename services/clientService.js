const { Users, Consults } = require('../models');

const create = async (cpf, name, birthDate, contact, cep, bank) => {
  const { dataValues } = await Users.create({
    cpf,
    name,
    birthDate,
    contact,
    cep,
    bank,
  });
  await Consults.create({
    userId: dataValues.id,
  })
  return dataValues;
};



module.exports = {
  create,
}
