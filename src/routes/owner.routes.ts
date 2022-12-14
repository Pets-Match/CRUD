import { Router } from "express";
import { CreateOwnerController, DeleteOwnerController, ListOwnersController } from "../controller";
import { authMiddleware } from "../middleware/authMiddleware";

const create = new CreateOwnerController();
const list = new ListOwnersController();
const remove = new DeleteOwnerController();

const ownerRoutes = (router: Router): void => {
    router.post('/owner', create.execute.bind(CreateOwnerController))
    router.get('/all-owner', list.execute.bind(ListOwnersController))
    router.delete('/owner', authMiddleware, remove.execute.bind(DeleteOwnerController))
}

export { ownerRoutes }