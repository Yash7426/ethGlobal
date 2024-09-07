import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/mongodb";
import { Protocol } from "@/models/Schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "POST") {
    const { name, description, icon } = req.body;

    try {
      const newProtocol = new Protocol({ name, description, icon });
      await newProtocol.save();
      res.status(201).json({
        message: "Protocol created successfully",
        protocol: newProtocol,
      });
    } catch (error) {
      res.status(500).json({ message: "Error creating protocol", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
