import {Request, Response} from "express";
import { Car } from "./models/car";
import { MongoClient } from "mongodb";
import 'dotenv/config';

export default async function addCars(req: Request, res: Response) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        return res.status(500).send('Missing MONGODB_URI in environment');
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = await client.db("cars")
        const carCollection = database.collection("car");

        const newCar: Car = req.body;

        await carCollection.insertOne(newCar);

        return res.status(201).send('Car added successfully');
    } 
    catch (error) {
        return res.status(500).send('Error connecting to MongoDB: ' + error);
    }
    finally {
        await client.close();
    }
}