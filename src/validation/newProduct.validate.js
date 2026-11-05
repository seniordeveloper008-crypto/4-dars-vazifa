// src/validation/users.validate.js
import Joi from 'joi';

const newProductSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "string.min": "Minimal 3 ta harfdan kam bulmasligi shart",
        "string.max": "Maximal 30 ta harfdan kup bulmasligi shart",
        "string.empty": "Maydon bo'sh bulmasligi shart",
        "any.required": "Ism kiritish shart"
    }),
    email: Joi.string().min(3).required().email().messages({
        "string.min": "Malumot 3 ta harfdan kam bulmasligi shart",
        "any.required": "Email yozishingiz shart",
        "string.empty": "Maydon bo'sh bo'lmasligi kerak",
        "string.email": "Togri email formatida yozing"
    })
});

const updateNewProductSchema = Joi.object({
     name: Joi.string().min(3).max(30).required().messages({
        "string.min": "Minimal 3 ta harfdan kam bulmasligi shart",
        "string.max": "Maximal 30 ta harfdan kup bulmasligi shart",
        "string.empty": "Maydon bo'sh bulmasligi shart",
        "any.required": "Ism kiritish shart"
    })
});

export {
  newProductSchema,
  updateNewProductSchema
}