// src/app/api/user/route.ts
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";

export async function PUT(req: Request) {
  try {
    // Retrieve the session
    const session: any = await getServerSession(options);

    if (!session || !session.user || !session.user?.id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Parse the request body
    const body = await req.json();
    const { name, email, username, profileImage } = body;

    // Update the user in the database
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        name,
        email,
        username,
        image: profileImage, // Save the image URL
      },
    });

    // Return success response
    return NextResponse.json(
      { message: "User updated successfully", user: updatedUser },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating user:", error.message || error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message || error },
      { status: 500 }
    );
  }
}

