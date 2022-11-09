import { Request, Response } from "express";
import { prisma } from '../../service/prisma'
import { hash } from 'bcryptjs'

class CreatePetController {
    async execute(req: Request, res: Response) {
        try {
            const { name, age, specie, race, gender, ownerId } = req.body

            const pet = await prisma.pet.create ({
                data: {
                    name:name,
                    age:age,
                    specie:specie,
                    race:race,
                    gender:gender,
                    ownerId:ownerId
                }
            })
            
            return res.status(200).json(pet)
        } catch (err:any) {
            return res.status(400).json(err.message)
        }
    }
}

export { CreatePetController }