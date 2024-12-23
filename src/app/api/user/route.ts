import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// Define the expected structure of the request body
interface UpdateUserRequestBody {
  name?: string;
  email?: string;
  username?: string;
  profileImage?: string;
  password?: string; // Include password if applicable
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");

    if (email) {
      // Search user by email
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ user }, { status: 200 });
    }

    const session: any = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Fetch the user details from the database
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching user:", error.message || error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message || error },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session: any = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, email, username, profileImage } = body;

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        username,
        image: profileImage,
      },
    });

    return NextResponse.json(
      { message: "User created successfully", user: newUser },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating user:", error.message || error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message || error },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const session: any = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body: UpdateUserRequestBody = await req.json();
    const { name, email, username, profileImage, password } = body;

    const updates: any = {};

    if (name) updates.name = name;
    if (email) updates.email = email;
    if (username) updates.username = username;
    if (profileImage) updates.image = profileImage;
    if (password) {
      // Implement proper password hashing here
      updates.password = password;
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { message: "No fields to update" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: updates,
    });

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

export async function DELETE(req: Request) {
  try {
    const session: any = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const deletedUser = await prisma.user.delete({
      where: { id: session.user.id },
    });

    return NextResponse.json(
      { message: "User deleted successfully", user: deletedUser },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting user:", error.message || error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message || error },
      { status: 500 }
    );
  }
}
