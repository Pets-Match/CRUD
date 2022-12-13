import { Request, Response } from "express";
import { prisma } from '../../service/prisma'

class CreateOwnerController {
    async execute(req: Request, res: Response) {
        try {
            const { name, phone, zipCode, state, city, neighborhood, street, num, addInfo, id, dogName, age, specie, race, gender } = req.body
            const addrAlreadyRegistered = await prisma.address.findFirst({
                where: {
                    AND: {
                        zipCode,
                        num
                    }
                }
            })

            var addrId = undefined

            if (!addrAlreadyRegistered) {
                const addr = await prisma.address.create({
                    data: {
                        zipCode,
                        state,
                        city,
                        neighborhood,
                        street,
                        num,
                        addInfo,
                    }
                })
                addrId = addr.id
            } else {
                addrId = addrAlreadyRegistered.id
            }


            const owner = await prisma.owner.create({
                data: {
                    id,
                    name: name,
                    phone: phone,
                    addressId: addrId,
                }
            })


            // const dog = await prisma.pet.create({
            //     data: {
            //         name: dogName,
            //         age: age,
            //         specie: specie,
            //         race: race,
            //         gender: gender,
            //         ownerId: id
            //     }
            // })


            return res.status(200).json({ owner })
        } catch (err: any) {
            console.log(err)
            return res.status(400).json(err.message)
        }
    }
}

export { CreateOwnerController }