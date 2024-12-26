import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Helper function for error logging and response
function handleError(message: string, error: any, status: number) {
  console.error(message, error);
  return NextResponse.json({ message }, { status });
}

// GET: Fetch all cart items or filter by userId if provided
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    let cartItems;

    if (userId) {
      // Fetch cart items for a specific user
      cartItems = await prisma.cart.findMany({
        where: { userId: parseInt(userId) },
        include: {
          product: {
            select: {
              id: true,
              productName: true,
              price: true,
              coverImage: true,
            },
          },
        },
      });

      if (cartItems.length === 0) {
        return NextResponse.json(
          { message: "No items in the cart for this user." },
          { status: 200 }
        );
      }
    } else {
      // Fetch all cart items
      cartItems = await prisma.cart.findMany({
        include: {
          product: {
            select: {
              id: true,
              productName: true,
              price: true,
              coverImage: true,
            },
          },
        },
      });

      if (cartItems.length === 0) {
        return NextResponse.json(
          { message: "No items in the cart." },
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
    const { userId, productId, quantity } = await req.json();

    const newCartItem = await prisma.cart.create({
      data: {
        userId,
        productId,
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
    return handleError("Error adding item to the cart", error, 500);
  }
}

// DELETE: Remove an item from the cart
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "Missing required field: id" },
        { status: 400 }
      );
    }

    const deletedCartItem = await prisma.cart.delete({
      where: { id },
    });

    return NextResponse.json(deletedCartItem, { status: 200 });
  } catch (error) {
    return handleError("Error deleting cart item", error, 500);
  }
}

// PUT: Update an existing cart item (e.g., update quantity)
export async function PUT(req: Request) {
  try {
    const { id, quantity } = await req.json();

    if (!id || typeof quantity !== "number") {
      return NextResponse.json(
        { message: "Missing required fields: id and/or quantity" },
        { status: 400 }
      );
    }

    const updatedCartItem = await prisma.cart.update({
      where: { id },
      data: { quantity },
    });

    return NextResponse.json(updatedCartItem, { status: 200 });
  } catch (error) {
    return handleError("Error updating cart item", error, 500);
  }
}

// DELETE_ALL: Clear all cart items for a specific user
export async function DELETE_ALL(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { message: "Missing required field: userId" },
        { status: 400 }
      );
    }

    const deletedItems = await prisma.cart.deleteMany({
      where: { userId: parseInt(userId) },
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
    const deletedItems = await prisma.cart.deleteMany({});

    return NextResponse.json(
      { message: `${deletedItems.count} cart items deleted globally.` },
      { status: 200 }
    );
  } catch (error) {
    return handleError("Error clearing all cart items", error, 500);
  }
}
