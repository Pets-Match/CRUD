import { Router } from "express";
import { hellowrld } from "./hellowrld.routes";

const router = Router()

hellowrld(router)

export { router }