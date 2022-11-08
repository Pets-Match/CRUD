import { Request, Response } from "express";
import { prisma } from '../../service/prisma'
import { hash } from 'bcryptjs'
class CreateOwnerController {
    async execute(req: Request, res: Response) {
        try {
            const { name, email, password, doc, phone, zipCode, state, city, neighborhood, street, num, addInfo } = req.body

            const addrAlreadyRegistered = await prisma.address.findFirst({
                where: {
                    AND: {
                        zipCode,
                        num
                    }
                }
            })

            var addrId = undefined
            if(!addrAlreadyRegistered){
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
            }else {
                addrId = addrAlreadyRegistered.id
            }

            const ownerAlreadyRegistered = await prisma.owner.findFirst({
                where: {
                    OR: [
                        { email: { equals: email } },
                        { doc: { equals: doc } }
                    ]
                }
            })
            if (ownerAlreadyRegistered) {
                throw new Error('Conta já cadastrada!')
            }

            const hashPassword = await hash(password, 7)

            const owner = await prisma.owner.create({
                data: {
                    name:name,
                    email:email,
                    password: hashPassword,
                    doc:doc,
                    phone:phone,
                    addressId: addrId,
                }
            })

            return res.status(200).json(owner)
        } catch (err:any) {
            return res.status(400).json(err.message)
        }
    }
}

export { CreateOwnerController }