import express from 'express'
import { router } from './routes/index.routes'

var app = new Array(3);
for (let i = 6666; i < 6669; i++) {
    app[i] = express()

    app[i].use(express.json())
    app[i].use(router)

    app[i].listen(i, () => {
        console.log(
            i
        )
    })
}
