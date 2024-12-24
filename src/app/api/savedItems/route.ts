import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Helper function for error logging and response
function handleError(message: string, error: any, status: number) {
  console.error(message, error);
  return NextResponse.json({ message }, { status });
}

// GET: Fetch all saved items or filter by email if provided
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email"); // Get the user's email from query params

    let savedItems;

    if (email) {
      // Fetch saved items for the specific user based on email
      savedItems = await prisma.savedItem.findMany({
        where: {
          user: {
            email, // Match the email from the user table
          },
        },
        include: {
          user: {
            select: { email: true }, // Include only the email from the user
          },
        },
      });

      if (savedItems.length === 0) {
        return NextResponse.json(
          { message: "You have no saved items." },
          { status: 200 }
        );
      }
    } else {
      // Fetch all saved items
      savedItems = await prisma.savedItem.findMany({
        include: {
          user: {
            select: { email: true }, // Include user information in the result
          },
        },
      });

      if (savedItems.length === 0) {
        return NextResponse.json(
          { message: "No saved items found." },
          { status: 200 }
        );
      }
    }

    return NextResponse.json(savedItems, { status: 200 });
  } catch (error) {
    return handleError("Error fetching saved items", error, 500);
  }
}

// POST: Add a new saved item for a user
export async function POST(req: Request) {
  try {
    const requestData = await req.json();
    const { userId, productId } = requestData;

    // Validate required fields
    if (!userId || !productId) {
      return NextResponse.json(
        { message: "Missing required fields: userId and productId" },
        { status: 400 }
      );
    }

    // Create a new saved item
    const newSavedItem = await prisma.savedItem.create({
      data: {
        userId,
        productId,
      },
    });

    return NextResponse.json(newSavedItem, { status: 201 });
  } catch (error) {
    return handleError("Error adding saved item", error, 500);
  }
}

// DELETE: Remove a saved item by ID and userId
export async function DELETE(req: Request) {
  try {
    const { id, userId } = await req.json();

    // Validate required fields
    if (!id || !userId) {
      return NextResponse.json(
        { message: "Missing required fields: id and userId" },
        { status: 400 }
      );
    }

    // Ensure the saved item exists and belongs to the user
    const savedItem = await prisma.savedItem.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true }, // Include user id for ownership verification
        },
      },
    });

    if (!savedItem) {
      return NextResponse.json(
        { message: "Saved item not found" },
        { status: 404 }
      );
    }

    if (savedItem.userId !== userId) {
      return NextResponse.json(
        { message: "You can only delete your own saved items" },
        { status: 403 }
      );
    }

    // Delete the saved item
    await prisma.savedItem.delete({ where: { id } });

    return NextResponse.json(
      { message: "Saved item deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return handleError("Error deleting saved item", error, 500);
  }
}

// PUT: Update an existing saved item (e.g., for adding additional fields in the future)
export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const { id, ...updates } = data;

    // Validate the ID
    if (!id) {
      return NextResponse.json(
        { message: "Missing required field: id" },
        { status: 400 }
      );
    }

    // Validate updates object
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { message: "No updates provided" },
        { status: 400 }
      );
    }

    const updatedSavedItem = await prisma.savedItem.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json(updatedSavedItem, { status: 200 });
  } catch (error) {
    return handleError("Error updating saved item", error, 500);
  }
}
