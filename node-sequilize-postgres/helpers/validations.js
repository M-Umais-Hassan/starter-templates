const joi = require("@hapi/joi");

const loginValidation = joi.object({
  email: joi.string().required().email().min(6),
  password: joi.string().required().min(6),
});

const registerValidation = joi.object({
  name: joi.string().required().min(3),
  email: joi.string().required().email().min(6),
  password: joi.string().required().min(6),
});

module.exports = {
  loginValidation,
  registerValidation,
};
