import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/mongodb";
import { Task } from "@/models/Schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "POST") {
    const { name, desc, ctaNeeded, protocolId } = req.body;

    try {
      const newTask = new Task({ name, desc, ctaNeeded, protocolId });
      await newTask.save();
      res
        .status(201)
        .json({ message: "Task created successfully", task: newTask });
    } catch (error) {
      res.status(500).json({ message: "Error creating task", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
