import { Router } from "express";
import { CreatePetController } from "../controller";

const create = new CreatePetController();
// const read = new ReadPetController();

const petRoutes = (router: Router): void => {
    router.post('/pet', create.execute.bind(CreatePetController))
    // router.get('/all-pet', read.execute.bind(ReadPetController))
}

export { petRoutes }