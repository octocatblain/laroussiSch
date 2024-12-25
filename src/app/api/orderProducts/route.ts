import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Helper function for error logging and response
function handleError(message: string, error: any, status: number) {
  console.error(message, error);
  return NextResponse.json({ message }, { status });
}

// GET: Fetch all order products or filter by id if provided
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id"); // Get the optional OrderProduct ID from query params

    let orderProducts;

    if (id) {
      // Fetch a specific order product by ID
      orderProducts = await prisma.orderProduct.findUnique({
        where: { id },
        include: {
          order: true,
          product: true,
        },
      });

      if (!orderProducts) {
        return NextResponse.json(
          { message: "No order product found with the specified ID." },
          { status: 404 }
        );
      }
    } else {
      // Fetch all order products
      orderProducts = await prisma.orderProduct.findMany({
        include: {
          order: true,
          product: true,
        },
      });

      if (!orderProducts || orderProducts.length === 0) {
        return NextResponse.json(
          { message: "No order products found." },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(orderProducts, { status: 200 });
  } catch (error) {
    return handleError("Error fetching order products", error, 500);
  }
}

// POST: Create a new order product
export async function POST(req: Request) {
  try {
    const { orderId, productId, quantity, price } = await req.json();

    // Validate required fields
    if (
      !orderId ||
      !productId ||
      typeof quantity !== "number" ||
      typeof price !== "number"
    ) {
      return NextResponse.json(
        {
          message:
            "Missing or invalid required fields: orderId, productId, quantity, price",
        },
        { status: 400 }
      );
    }

    const total = quantity * price;

    const newOrderProduct = await prisma.orderProduct.create({
      data: {
        orderId,
        productId,
        quantity,
        price,
        total,
      },
    });

    return NextResponse.json(newOrderProduct, { status: 201 });
  } catch (error) {
    return handleError("Error creating order product", error, 500);
  }
}

// DELETE: Remove an order product by id
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        { message: "Missing required field: id" },
        { status: 400 }
      );
    }

    const deletedOrderProduct = await prisma.orderProduct.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Order product deleted successfully", deletedOrderProduct },
      { status: 200 }
    );
  } catch (error) {
    return handleError("Error deleting order product", error, 500);
  }
}

// PUT: Update an order product
export async function PUT(req: Request) {
  try {
    const { id, ...updates } = await req.json();

    // Validate the ID
    if (!id) {
      return NextResponse.json(
        { message: "Missing required field: id" },
        { status: 400 }
      );
    }

    const updatedOrderProduct = await prisma.orderProduct.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json(updatedOrderProduct, { status: 200 });
  } catch (error) {
    return handleError("Error updating order product", error, 500);
  }
}
