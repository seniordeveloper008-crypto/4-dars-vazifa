import Joi from 'joi';

const returnedProductUserSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "string.min": "Qaytarilgan mahsulotnomi  minimal 3 ta harfdan kam bulmasligi shart",
        "string.max": " Qaytarilgan nomi Maximal 30 ta harfdan kup bulmasligi shart",
        "string.empty": "Qaytarilgan mahsulot maydoni bo'sh bulmasligi shart",
        "any.required": " Qaytarilgan mahsulotnomini Ism kiritish shart"
    }),
    email: Joi.string().min(3).required().email().messages({
        "string.min": "Malumot 3 ta harfdan kam bulmasligi shart",
        "any.required": "Email yozishingiz shart",
        "string.empty": "Maydon bo'sh bo'lmasligi kerak",
        "string.email": "Togri email formatida yozing"
    })
});

const returnedProductupdateUserSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "string.min": "Qaytarilgan mahsulotnomi  minimal 3 ta harfdan kam bulmasligi shart",
        "string.max": " Qaytarilgan nomi Maximal 30 ta harfdan kup bulmasligi shart",
        "string.empty": "Qaytarilgan mahsulot maydoni bo'sh bulmasligi shart",
        "any.required": " Qaytarilgan mahsulotnomini Ism kiritish shart"
    }),
});

export {
    returnedProductUserSchema,
    returnedProductupdateUserSchema
}