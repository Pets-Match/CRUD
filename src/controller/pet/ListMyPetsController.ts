import { Request, Response } from "express";
import { prisma } from '../../service/prisma'
import { hash } from 'bcryptjs'

class ListMyPetsController {
    async execute(req: Request, res: Response) {
        try {

            const pet = await prisma.pet.findMany({
                where: {
                    ownerId: req.userID
                }
            })

            return res.status(200).json({ pets: pet })
        } catch (err: any) {
            return res.status(400).json(err.message)
        }
    }
}

export { ListMyPetsController }