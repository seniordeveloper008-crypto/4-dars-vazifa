import { Router } from "express";
import trendProductsController from "../controllers/trendProducts.controller.js";
import { validate } from "../middleware/validate.middware.users.js";
import { trendProductUserSchema, trendProductupdateUserSchema } from "../validation/trendProducts.validate.js";

const trendProducts = new Router();

trendProducts.get('/',trendProductsController.getAll);
trendProducts.get('/:id', trendProductsController.getId);

trendProducts.post('/', validate(trendProductUserSchema), trendProductsController.creat);
trendProducts.put('/:id',validate( trendProductupdateUserSchema), trendProductsController.update);

trendProducts.delete('/:id', trendProductsController.deleteUser);

export { trendProducts };