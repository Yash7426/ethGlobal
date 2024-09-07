import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/mongodb";
import { User } from "@/models/Schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "GET") {
    const { username } = req.query;

    try {
      const user = await User.findOne({ username });
      if (user) {
        res.status(200).json({ exists: true });
      } else {
        res.status(200).json({ exists: false });
      }
    } catch (error) {
      res.status(500).json({ message: "Error checking username", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
