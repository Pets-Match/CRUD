import express from 'express'
import { CreateOwnerController } from './controller';
import { router } from './routes/index.routes'
const { consume } = require("./communicating/queue");

const app = express()

app.use(express.json())
app.use(router)

app.listen(6666, () => {
    console.log('on 6666')
    consume("fila1", (message: any) => {
    });
})
