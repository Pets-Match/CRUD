import { Router } from "express";
import { CreateOwnerController } from "../controller";

const create = new CreateOwnerController();
// const read = new ReadOwnerController();

const ownerRoutes = (router: Router): void => {
    router.post('/owner', create.execute.bind(CreateOwnerController))
    // router.get('/all-owner', read.execute.bind(ReadOwnerController))
}

export { ownerRoutes }