import { Request, Response } from "express";
import { prisma } from '../../service/prisma'

class DeletePetController {
    async execute(req: Request, res: Response) {
        try {



            const toBeDeleted = await prisma.pet.findFirst({
                where: {
                    AND: [
                        {
                            id: {
                                equals: Number(req.params.id)
                            },
                            ownerId: req.userID
                        }
                    ]
                },
            })

            if (!toBeDeleted) {
                throw Error(`Pet with ID ${req.params.id} has not been found OR you don't own it`)
            } else {
                await prisma.pet.delete({
                    where: {
                        id: toBeDeleted.id
                    },
                })
                return res.status(200).json({ message: "Your pet has being removed" })
            }


        } catch (err: any) {
            return res.status(400).json(err.message)
        }
    }
}

export { DeletePetController }