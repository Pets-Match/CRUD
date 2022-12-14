import { Request, Response } from "express";
import { prisma } from '../../service/prisma'

class ListOwnersController {
    async execute(req: Request, res: Response) {
        try {

            const owners = await prisma.owner.findMany({})


            return res.status(200).json({ owners })
        } catch (err: any) {
            console.log(err)
            return res.status(400).json(err.message)
        }
    }
}

export { ListOwnersController }