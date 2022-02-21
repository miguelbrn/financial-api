const Joi = require('joi');

module.exports = (error, _req, res, _next) => {
  if(Joi.isError(error)) {
    const { message } = error;
    return res.status(400).json({ message });
  };

  return res.status(500).json({ message: 'Internal server error' });
};
