import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Helper function for error logging and response
function handleError(message: string, error: any, status: number) {
  console.error(message, error);
  return NextResponse.json({ message }, { status });
}

// GET: Fetch all cart items, filter by userId, or filter by cartId if provided
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");
    const cartId = url.searchParams.get("cartId");
    const sessionToken = req.headers.get("Authorization")?.split(" ")[1];

    if (!sessionToken) {
      return NextResponse.json(
        { message: "Unauthorized: No session token provided." },
        { status: 401 }
      );
    }

    let cartItems;

    if (!cartId && !userId) {
      // Handle case where neither cartId nor userId is provided
      cartItems = await prisma.cart.findMany({
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
            },
          },
          status: {
            select: {
              id: true,
              name: true,
            },
          },
          product: {
            select: {
              id: true,
              productName: true,
              price: true,
              coverImage: true,
              slug: true,
            },
          },
        },
      });

      if (cartItems.length === 0) {
        return NextResponse.json(
          { message: "No Cart items available." },
          { status: 200 }
        );
      }

      return NextResponse.json(cartItems, { status: 200 });
    }

    if (cartId) {
      // Validate cartId format (if applicable, e.g., UUID format)
      if (!/^[0-9a-fA-F-]{36}$/.test(cartId)) {
        return NextResponse.json(
          { message: "Bad Request: Invalid cartId format." },
          { status: 400 }
        );
      }

      cartItems = await prisma.cart.findMany({
        where: { id: cartId },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
              
            },
          },
          status: {
            select: {
              id: true,
              name: true,
            },
          },
          product: {
            select: {
              id: true,
              productName: true,
              price: true,
              coverImage: true,
              slug: true,
            },
          },
        },
      });
    } else if (userId) {
      // Validate userId format (if applicable, e.g., UUID or other string validation)
      if (!/^[a-zA-Z0-9-_]+$/.test(userId)) {
        return NextResponse.json(
          { message: "Bad Request: Invalid userId format." },
          { status: 400 }
        );
      }

      cartItems = await prisma.cart.findMany({
        where: { userId },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
            },
          },
          status: {
            select: {
              id: true,
              name: true,
            },
          },
          product: {
            select: {
              id: true,
              productName: true,
              price: true,
              coverImage: true,
              slug: true,
            },
          },
        },
      });

      if (cartItems.length === 0) {
        return NextResponse.json(
          { message: "No items found in the cart." },
          { status: 200 }
        );
      }
    }

    return NextResponse.json(cartItems, { status: 200 });
  } catch (error) {
    return handleError("Error fetching cart items", error, 500);
  }
}


// POST: Add a new item to the cart
export async function POST(req: Request) {
  try {
    const { userId, productId, quantity, statusId } = await req.json();

    // Ensure required fields are provided
    if (!userId || !productId || typeof quantity !== "number") {
      return NextResponse.json(
        { message: "Missing required fields: userId, productId, or quantity" },
        { status: 400 }
      );
    }

    // Create a new cart item and link it to the user
    const newCartItem = await prisma.cart.create({
      data: {
        userId, // User ID must exist in the User table
        productId,
        statusId,
        quantity,
      },
    });

    return NextResponse.json(newCartItem, { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { message: "This item is already in the cart." },
        { status: 409 }
      );
    }
    console.log(error);
    return handleError(`Error creating cart item: ${error} `, error, 500);
  }
}


// PUT: Update an existing cart item (e.g., update quantity)
export async function PUT(req: Request) {
  try {
    const { id, quantity } = await req.json();

    // Validate input
    if (!id || typeof quantity !== "number") {
      return NextResponse.json(
        { message: "Missing required fields: id and/or quantity" },
        { status: 400 }
      );
    }

    // Check if the cart item exists before updating
    const existingCartItem = await prisma.cart.findUnique({
      where: { id },
    });

    if (!existingCartItem) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      );
    }

    // Update the cart item
    const updatedCartItem = await prisma.cart.update({
      where: { id },
      data: { quantity },
    });

    return NextResponse.json(updatedCartItem, { status: 200 });
  } catch (error) {
    return handleError("Error updating cart item", error, 500);
  }
}

// DELETE: Remove an item from the cart
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    // Validate input
    if (!id) {
      return NextResponse.json(
        { message: "Missing required field: id" },
        { status: 400 }
      );
    }

    // Check if the cart item exists before deleting
    const existingCartItem = await prisma.cart.findUnique({
      where: { id },
    });

    if (!existingCartItem) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      );
    }

    // Delete the cart item
    const deletedCartItem = await prisma.cart.delete({
      where: { id },
    });

    return NextResponse.json(deletedCartItem, { status: 200 });
  } catch (error) {
    return handleError("Error deleting cart item", error, 500);
  }
}

// DELETE_ALL: Clear all cart items for a specific user
export async function DELETE_ALL(req: Request) {
  try {
    const { userId } = await req.json();

    // Validate input
    if (!userId) {
      return NextResponse.json(
        { message: "Missing required field: userId" },
        { status: 400 }
      );
    }

    // Check if the user has any cart items before deleting
    const userCartItems = await prisma.cart.findMany({
      where: { userId },
    });

    if (userCartItems.length === 0) {
      return NextResponse.json(
        { message: "No cart items found for this user" },
        { status: 404 }
      );
    }

    // Delete all cart items for the user
    const deletedItems = await prisma.cart.deleteMany({
      where: { userId },
    });

    return NextResponse.json(
      { message: `${deletedItems.count} cart items deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    return handleError("Error clearing cart for user", error, 500);
  }
}

// DELETE_ALL_GLOBAL: Clear all cart items globally (admin use case)
export async function DELETE_ALL_GLOBAL() {
  try {
    // Delete all cart items globally
    const deletedItems = await prisma.cart.deleteMany({});

    return NextResponse.json(
      { message: `${deletedItems.count} cart items deleted globally.` },
      { status: 200 }
    );
  } catch (error) {
    return handleError("Error clearing all cart items", error, 500);
  }
}
