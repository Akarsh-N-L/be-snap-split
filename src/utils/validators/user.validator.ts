import joi from "joi";

const createUserValidator = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

const updateUserValidator = joi.object({
  email: joi.string().email(),
  password: joi.string().required(),
  name: joi.string(),
  uid: joi.string(),
});

export { createUserValidator, updateUserValidator };
