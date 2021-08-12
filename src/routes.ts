import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";

const router = Router();

const createUserControler = new CreateUserController();
const createtaTagControler = new CreateTagController();

router.post("/users", createUserControler.handle);
router.post("/tags", createtaTagControler.handle);

export { router };
