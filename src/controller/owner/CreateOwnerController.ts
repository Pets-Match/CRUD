import { Request, Response } from "express";

class CreateOwnerController {
    async execute(req: Request, resp: Response) {
        try {
            const { id, name, idAddress, phone } = req.body

            return resp.status(200).json()
        } catch (err) {
            return resp.status(400).json(err)
        }
    }
}

export { CreateOwnerController }