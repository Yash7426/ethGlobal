import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/mongodb";
import { User } from "@/models/Schema";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "PUT") {
    const { username, userimage } = req.body;

    try {
      const updatedUser = await User.findOneAndUpdate(
        { username },
        { userProfile: userimage },
        { new: true }
      );
      if (updatedUser) {
        res
          .status(200)
          .json({
            message: "Image updated successfully",
            user: updatedUser,
          });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating Image", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
