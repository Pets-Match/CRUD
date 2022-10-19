import express from 'express'
import { router } from './routes/index.routes'

const app = express()

app.use(express.json())
app.use(router)

app.listen(6666, ()=>{console.log("😈🔥 Server started at port 6666 🔥😈")})