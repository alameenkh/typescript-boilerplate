import joi from '@hapi/joi';

export default {
  register: joi.object({
    email: joi
      .string()
      .email()
      .required(),
    password: joi
      .string()
      .min(6)
      .max(32)
      .required(),
    name: joi.string().required(),
  }),
  login: joi.object({
    email: joi
      .string()
      .email()
      .required(),
    password: joi.string().required(),
  }),
  update: joi.object({}),
};
