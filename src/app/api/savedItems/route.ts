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
      // Fetch saved items for the user
      savedItems = await prisma.savedItem.findMany({
        where: { userEmail: email },
      });
    } else {
      // Fetch all saved items
      savedItems = await prisma.savedItem.findMany();
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
    const { userEmail, productId } = requestData;

    // Validate required fields
    if (!userEmail || !productId) {
      return NextResponse.json(
        { message: "Missing required fields: userEmail and productId" },
        { status: 400 }
      );
    }

    // Create a new saved item
    const newSavedItem: any = await prisma.savedItem.create({
      data: {
        userEmail,
        productId,
      },
    });

    return NextResponse.json(newSavedItem, { status: 201 });
  } catch (error) {
    return handleError("Error adding saved item", error, 500);
  }
}

// DELETE: Remove a saved item by ID and user email
export async function DELETE(req: Request) {
  try {
    const { id, userEmail } = await req.json();

    // Validate required fields
    if (!id || !userEmail) {
      return NextResponse.json(
        { message: "Missing required fields: id and userEmail" },
        { status: 400 }
      );
    }

    // Ensure the saved item exists and belongs to the user
    const savedItem: any = await prisma.savedItem.findUnique({
      where: { id },
    });

    if (!savedItem) {
      return NextResponse.json(
        { message: "Saved item not found" },
        { status: 404 }
      );
    }

    if (savedItem.userEmail !== userEmail) {
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
