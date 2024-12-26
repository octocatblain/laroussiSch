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
            select: {
              id: true,
              username: true,
              email: true, // Include user information in the result
              name: true, // Add more fields if needed
            },
          },
          product: {
            select: {
              slug: true,
              coverImage: true,
              id: true,
              productName: true, // Replace with the actual fields you want from the product table
              price: true,
            },
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
            select: {
              id: true,
              username: true,
              email: true, // Include user information in the result
              name: true, // Add more fields if needed
            },
          },
          product: {
            select: {
              slug: true,
              coverImage: true,
              id: true,
              productName: true, // Replace with the actual fields you want from the product table
              price: true,
            },
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

  const newSavedItem = await prisma.savedItem.create({
    data: {
      userId,
      productId,
    },
  });
  return NextResponse.json(newSavedItem, { status: 201 });
} catch (error) {
  if (error.code === "P2002") {
    return NextResponse.json(
      { message: "This item is already saved." },
      { status: 409 }
    );
  }
  throw error; // Re-throw other errors
}

}

// DELETE: Function to delete specific saved items based on productId and userId
export async function DELETE(req: Request) {
  try {
    const { productId, userId } = await req.json();

    // Validate required fields
    if (!productId || !userId) {
      return NextResponse.json(
        { message: "Missing required fields: productId and userId" },
        { status: 400 }
      );
    }

    // Check if there are any matching saved items
    const savedItems = await prisma.savedItem.findMany({
      where: {
        productId,
        userId,
      },
    });

    if (savedItems.length === 0) {
      return NextResponse.json(
        { message: "No matching saved items found" },
        { status: 404 }
      );
    }

    // Delete all matching saved items
    await prisma.savedItem.deleteMany({
      where: {
        productId,
        userId,
      },
    });

    return NextResponse.json(
      { message: "Saved items deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting saved items:", error);
    return NextResponse.json(
      { message: "Error deleting saved items" },
      { status: 500 }
    );
  }
}

// Function to delete all saved items for a specific user
export async function DELETE_ALL(req: Request) {
  try {
    const { userId } = await req.json();

    // Validate required fields
    if (!userId) {
      return NextResponse.json(
        { message: "Missing required field: userId" },
        { status: 400 }
      );
    }

    // Check if there are any saved items for the user
    const savedItems = await prisma.savedItem.findMany({
      where: {
        userId,
      },
    });

    if (savedItems.length === 0) {
      return NextResponse.json(
        { message: "No saved items found for the user" },
        { status: 404 }
      );
    }

    // Delete all saved items for the user
    await prisma.savedItem.deleteMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(
      { message: "All saved items for the user deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting all saved items:", error);
    return NextResponse.json(
      { message: "Error deleting all saved items" },
      { status: 500 }
    );
  }
}

// Function to delete all saved items globally (admin use case)
export async function DELETE_ALL_GLOBAL(req: Request) {
  try {
    // Check if there are any saved items in the table
    const savedItems = await prisma.savedItem.findMany();

    if (savedItems.length === 0) {
      return NextResponse.json(
        { message: "No saved items found in the table" },
        { status: 404 }
      );
    }

    // Delete all saved items
    await prisma.savedItem.deleteMany({});

    return NextResponse.json(
      { message: "All saved items globally deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting all saved items globally:", error);
    return NextResponse.json(
      { message: "Error deleting all saved items globally" },
      { status: 500 }
    );
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
