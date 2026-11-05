import { Router } from "express";
import discountController from "../controllers/discount.controller.js";
import { validate } from "../middleware/validate.middware.users.js";
import { createDiscountSchema, updateDiscountSchema } from "../validation/discount.validate.js";

const Discount = new Router();


Discount.get("/", discountController.getAll);
Discount.get("/:id", discountController.getId);
Discount.post("/", validate(createDiscountSchema), discountController.create);
Discount.put("/:id", validate(updateDiscountSchema), discountController.update);
Discount.delete("/:id", discountController.deleteItem);


export { Discount };