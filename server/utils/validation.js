import Joi from "joi";

export function userValidation(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(user);
}
export function loginValidation(user) {
  const schema = Joi.object({
    email: Joi.string().min(5).required().email(),
    password: Joi.string().min(5).required(),
  });
  return schema.validate(user);
}
export function productValidation(product) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    description: Joi.string().min(5).required(),
    description: Joi.string().min(5).required(),
    price: Joi.string().min(2).required(),
    imageUrl: Joi.string().min(5).required(),
  });
  return schema.validate(product);
}
