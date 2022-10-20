import { Request, Response } from "express";

class ReadOwnerController {
    async execute(req: Request, resp: Response) {
        try{
        } catch (err){
            return resp.status(400).json(err)
        }

    }
}