const Joi = require('joi');

const clientValidate = (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required(),
    cpf: Joi.string().required(),
    birthDate: Joi.date().required(),
    contact: Joi.string().required(),
    cep: Joi.number().required(),
    bank: Joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

module.exports = {
  clientValidate,
};
