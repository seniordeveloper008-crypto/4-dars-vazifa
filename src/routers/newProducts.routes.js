import express from "express";
import newProductController from "../controllers/newProduct.controller.js";
import { validate } from "../middleware/validate.middware.users.js";
import { newProductSchema, updateNewProductSchema } from "../validation/newProduct.validate.js";

const newProduct = express.Router();

newProduct.get("/", newProductController.getAllProducts);
newProduct.get("/:id", newProductController.getId);
newProduct.post("/", validate(newProductSchema), newProductController.creatProduct);
newProduct.put("/:id", validate(updateNewProductSchema), newProductController.updateProduct);
newProduct.delete("/:id", newProductController.deleteProduct);

export { newProduct }
