import { Request, Response } from "express";
import { prisma } from '../../service/prisma'

class CreateOwnerController {
    async execute(req: Request, res: Response) {
        try {
            const { name, phone, zipCode, state, city, neighborhood, street, num, addInfo, id, dogName, age, specie, race, gender } = req.body
            console.log(req.body)
            // if (name === undefined || phone === undefined || zipCode === undefined || state === undefined || city === undefined ||
            //     neighborhood === undefined || street === undefined || num === undefined || addInfo === undefined || id === undefined || dogName === undefined
            //     || age === undefined || specie === undefined || race === undefined || gender === undefined) {

            //     return res.status(400).json({ error: "Error while POST owner or animal" })
            // }

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


            const dog = await prisma.pet.create({
                data: {
                    name: dogName,
                    age: age,
                    specie: specie,
                    race: race,
                    gender: gender,
                    ownerId: id
                }
            })


            return res.status(200).json({ owner, dog })
        } catch (err: any) {
            console.log(err)
            return res.status(400).json(err.message)
        }
    }
}

export { CreateOwnerController }