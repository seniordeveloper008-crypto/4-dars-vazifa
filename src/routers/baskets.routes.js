import { Router } from "express";
import BasketsController from "../controllers/baskets.controllers.js"
import { createBasketSchema,updateBasketSchema } from "../validation/baskets.validate.js";
import { validate } from "../middleware/validate.middware.users.js";
const baskets = new Router()
baskets
    .get('/',BasketsController.getAllBaskets)
    .get('/:id', BasketsController.getId)
    .post('/',validate(createBasketSchema), BasketsController.creatBaskets)
    .put('/:id', validate(updateBasketSchema),BasketsController.updateBaskets)
    .delete('/:id', BasketsController.deleteBaskets)

export { baskets }
