import { Router } from "express";
import { hellowrld } from "./hellowrld.routes";
import { ownerRoutes } from "./owner.routes";
import { petRoutes } from "./pet.routes";

const router = Router()

hellowrld(router)
ownerRoutes(router)
petRoutes(router)

export { router }