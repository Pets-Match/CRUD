import { Router } from "express";
import { CreatePetController, ListMyPetsController, DeletePetController } from "../controller";
import { authMiddleware } from "../middleware/authMiddleware";

const create = new CreatePetController();
const list = new ListMyPetsController();
const remove = new DeletePetController()
// const read = new ReadPetController();

const petRoutes = (router: Router): void => {
    router.post('/pet', authMiddleware, create.execute.bind(CreatePetController))
    router.get('/pet', authMiddleware, list.execute.bind(ListMyPetsController))
    router.delete('/pet/:id', authMiddleware, remove.execute.bind(DeletePetController))
    // router.get('/all-pet', read.execute.bind(ReadPetController))
}

export { petRoutes }