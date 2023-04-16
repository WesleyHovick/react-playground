import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise
    const db = client.db("sample_weatherdata")
    switch (req.method) {
        case "GET":
            const allWeatherData = await db.collection("data").find({}).limit(5).toArray();
            res.json({ status: 200, data: allWeatherData })
            break;
    }
}