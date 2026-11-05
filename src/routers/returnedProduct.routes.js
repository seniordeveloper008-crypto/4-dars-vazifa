import { Router } from "express";
import returnedProductController from "../controllers/returnedProduct.controller.js";
import { returnedProductUserSchema, returnedProductupdateUserSchema } from "../validation/returnedProduct.validate.js";
import { validate } from "../middleware/validate.middware.users.js";

const returnedProduct = new Router();

returnedProduct.get('/', returnedProductController.getAll);
returnedProduct.get('/:id', returnedProductController.getId);

returnedProduct.post('/', validate(returnedProductUserSchema), returnedProductController.creat);
returnedProduct.put('/:id', validate(returnedProductupdateUserSchema), returnedProductController.update);

returnedProduct.delete('/:id', returnedProductController.deleteUser);

export {
    returnedProduct
}