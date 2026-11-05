import { Router } from "express";
import usersControllers from "../controllers/users.controllers.js";
import { creatUserSchema,updateUserSchema } from "../validation/users.validate.js";
import { validate } from "../middleware/validate.middware.users.js";

const userss = new Router();

userss.get('/', usersControllers.getAll);
userss.get('/:id', usersControllers.getId);

userss.post('/', validate(creatUserSchema), usersControllers.creat);
userss.put('/:id',validate(updateUserSchema), usersControllers.update);

userss.delete('/:id', usersControllers.deleteUser);

export { userss };