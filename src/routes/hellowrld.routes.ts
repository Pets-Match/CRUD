import { Request, Response, Router } from "express";

const hellowrld = (router: Router) => {
    router.post("/Hello", (req: Request, resp: Response) => {
        return resp.json({ message: "Hello Wrld!" }).status(200)
    })
}

export { hellowrld }