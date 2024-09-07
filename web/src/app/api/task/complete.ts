import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/mongodb";
import { Task, User } from "@/models/Schema";
import mongoose from "mongoose";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDatabase();

  if (req.method === "PUT") {
    const { username, taskId } = req.body;

    try {
      const task = await Task.findById(taskId);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      task.usersCompleted.push(user._id as mongoose.Types.ObjectId);
      await task.save();
      user.completedTasks.push(taskId);
      await user.save();
      res
        .status(200)
        .json({ message: "Task and user updated successfully", task, user });
    } catch (error) {
      res.status(500).json({ message: "Error updating task and user", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
