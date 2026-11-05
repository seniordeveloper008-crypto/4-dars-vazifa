import { Router } from "express"
import categoriesController from "../controllers/categories.controller.js";
import { validate } from "../middleware/validate.middware.users.js";
import { createCategoryaSchema, updateCategoryaSchema } from "../validation/categories.validate.js";

const categories = new Router()

categories.get("/", categoriesController.getAllCategories)
categories.get("/:id", categoriesController.getAllCategories)
categories.post("/", validate(createCategoryaSchema), categoriesController.creatCategories)
categories.put("/:id", validate(updateCategoryaSchema), categoriesController.updateCategorises)
categories.delete("/:id", categoriesController.deleteCategories)

export { categories }