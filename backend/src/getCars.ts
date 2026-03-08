import 'dotenv/config';
import { Request, Response } from 'express';
import { Car } from './models/car';
import { MongoClient } from 'mongodb';

export default async function getCars(req: Request, res: Response) {

    const uri = process.env.MONGODB_URI;
    if (!uri) {
        return res.status(500).send('Missing MONGODB_URI in environment');
    }

    const client = new MongoClient(uri);
    let cars: Car[] = [];

    try {
        await client.connect();

        const database = await client.db("cars")
        const carCollection = database.collection("car");


        database.command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const carDocs = await carCollection.find().toArray();
        cars = carDocs.map(doc => ({
            id: doc.id,
            make: doc.make,
            model: doc.model,
            year: doc.year,
            price: doc.price,
            mileage: doc.mileage,
            color: doc.color,
            description: doc.description
        }));
        
    } 
    catch (error) {
        return res.status(500).send('Error connecting to MongoDB: ' + error);
    }
    finally {
        await client.close();
    }

    return res.send(cars);
}