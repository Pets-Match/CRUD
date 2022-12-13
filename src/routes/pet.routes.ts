import { Router } from "express";
import { CreatePetController } from "../controller";
import { ListMyPetsController } from "../controller/pet/ListMyPetsController";
import { authMiddleware } from "../middleware/authMiddleware";

const create = new CreatePetController();
const list = new ListMyPetsController();
// const read = new ReadPetController();

const petRoutes = (router: Router): void => {
    router.post('/pet', authMiddleware, create.execute.bind(CreatePetController))
    router.get('/my-pets', authMiddleware, list.execute.bind(ListMyPetsController))
    // router.get('/all-pet', read.execute.bind(ReadPetController))
}

export { petRoutes }