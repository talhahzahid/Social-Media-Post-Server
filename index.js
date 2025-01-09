

import express, { urlencoded } from "express"
import dotenv from "dotenv"
dotenv.config()
const app = express()
const port = process.env.PORT

app.use(urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello Social Media Post')
})

app.listen(port, () => {
    console.log("Server Is Running At Port ", process.env.port);
})