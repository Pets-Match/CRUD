import { Request, Response } from "express";
import { prisma } from '../../service/prisma'
import { hash } from 'bcryptjs'
import axios from "axios";

class CreatePetController {
    async execute(req: Request, res: Response) {
        try {
            const { name, age, specie, race, gender } = req.body

            const owner = await prisma.owner.findUnique({
                where: {
                    id:
                        req.userID
                }
            })


            if (!owner) {
                throw new Error('Owner not found')
            }

            const pet = await prisma.pet.create({
                data: {
                    name: name,
                    age: age,
                    specie: specie,
                    race: race,
                    gender: gender,
                    ownerId: owner.id,
                }
            })

            await axios.post('http://localhost:3001/pet-bus', pet)

            return res.status(200).json(pet)
        } catch (err: any) {
            console.log(err)
            return res.status(400).json(err.message)
        }
    }
}

export { CreatePetController }