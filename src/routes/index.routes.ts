import { Router } from "express";
import { hellowrld } from "./hellowrld.routes";
import { ownerRoutes } from "./owner.routes";

const router = Router()

hellowrld(router)
ownerRoutes(router)

export { router }