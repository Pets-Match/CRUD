import { Request, Response } from "express";

class CreateOwnerController {
    async execute(req: Request, res: Response) {
        try {
            const { id, name, email, idAddress, doc, phone } = req.body

            return res.status(200).json()
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}

export { CreateOwnerController }