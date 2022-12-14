import { Request, Response } from "express";
import { prisma } from '../../service/prisma'

class DeleteOwnerController {
    async execute(req: Request, res: Response) {
        try {

            const owner = await prisma.owner.findUnique({
                where: {
                    id: req.userID
                    // id: Number(req.params.id)
                }
            })

            if (!owner) {
                throw new Error("Owner not found")
            }

            await prisma.pet.deleteMany({
                where: {
                    ownerId: owner?.id
                }
            })

            await prisma.owner.delete({
                where: {
                    id: owner.id
                }
            })

            return res.status(200).json({ message: "deleted" })
        } catch (err: any) {
            console.log(err)
            return res.status(400).json(err.message)
        }
    }
}

export { DeleteOwnerController }