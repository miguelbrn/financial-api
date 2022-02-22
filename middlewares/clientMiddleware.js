const Joi = require('joi');

const clientValidate = (req, res, next) => {
  const { error } = Joi.object({
    cpf: Joi.string().required(),
    name: Joi.string().required(),
    birthdate: Joi.date().required(),
    contact: Joi.string().required(),
    cep: Joi.string().required(),
    bank: Joi.string().required(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

module.exports = {
  clientValidate,
};
