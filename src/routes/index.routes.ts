import { Router } from "express";
import { ownerRoutes } from "./owner.routes";
import { petRoutes } from "./pet.routes";

const router = Router()

ownerRoutes(router)
petRoutes(router)

export { router }