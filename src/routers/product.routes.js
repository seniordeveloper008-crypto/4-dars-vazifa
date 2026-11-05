import { Router } from "express";
import ProductControllers from "../controllers/products.controller.js"
import { validate } from "../middleware/validate.middware.users.js";
import { trendProductUserSchema, trendProductupdateUserSchema } from "../validation/trendProducts.validate.js";

const product = new Router()
product
    .get('/', ProductControllers.getAllProducts)
    .get('/:id', ProductControllers.getId)
    .post('/', validate(trendProductUserSchema), ProductControllers.creatProduct)
    .put('/:id', validate(trendProductupdateUserSchema), ProductControllers.updateProduct)
    .delete('/:id', ProductControllers.deleteProduct)

export { product }
