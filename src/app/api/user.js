// src\app\api\user.js
import { getSession } from "next-auth/react";
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "PUT") {
    const { name, email, username, profileImage, password } = req.body;
    const updates = {};

    if (name) updates.name = name;
    if (email) updates.email = email;
    if (username) updates.username = username;
    if (profileImage) updates.image = profileImage; // Save the image URL here
    if (password) updates.password = password; // Hash password appropriately

    try {
      const updatedUser = await prisma.user.update({
        where: { id: session.user.id },
        data: updates,
      });

      return res
        .status(200)
        .json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({ message: "Failed to update user" });
    }
  } else {
    res.status(405).end("Method not allowed");
  }
}
