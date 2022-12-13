import { Request, Response, NextFunction } from "express";
import { prisma } from "../service/prisma";
import axios from 'axios'

async function authMiddleware(
    req: Request, res: Response, next: NextFunction
) {

    try {
        const response = await axios.get('http://localhost:8080/auth/middleware', {
            headers: {
                Authorization: req.headers.authorization
            }
        })

        req.userID = response.data.id
        return next()


    } catch (error: any) {
        return res.status(401).json(error)
    }


}

export { authMiddleware }


