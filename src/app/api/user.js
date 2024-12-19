// File: /pages/api/user.js
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
    if (profileImage) updates.image = profileImage;
    if (password) updates.password = password; // Hash password appropriately

    await prisma.user.update({
      where: { id: session.user.id },
      data: updates,
    });

    res.status(200).json({ message: "User updated successfully" });
  } else {
    res.status(405).end("Method not allowed");
  }
}
