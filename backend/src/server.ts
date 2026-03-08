import express, { Request, Response } from "express";
import getCars from "./getCars";
import addCars from "./addCars";

const app = express()
app.use(express.json());
const port = 3000

app.get('/car', getCars)
app.post('/car', addCars)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})