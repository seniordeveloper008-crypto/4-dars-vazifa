import { Router } from "express";
import blockedUserController from "../controllers/blocked.User.controller.js";
import { validate } from "../middleware/validate.middware.users.js";
import { createCategoryaSchema, updateCategoryaSchema } from "../validation/categories.validate.js";

const blocked = new Router()

blocked.get("/", blockedUserController.getAllCategories);
blocked.get("/:id", blockedUserController.getAllCategories);
blocked.post("/", validate(createCategoryaSchema), blockedUserController.creatCategories);
blocked.put("/:id", validate(updateCategoryaSchema), blockedUserController.updateCategorises);
blocked.delete("/:id", blockedUserController.deleteCategories);

export { blocked };