import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Helper function for error logging and response
function handleError(message: string, error: any, status: number) {
  console.error(message, error);
  return NextResponse.json({ message }, { status });
}

// GET: Fetch all orders or filter by user email if provided
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id"); // Get the optional order ID from query params

    let orders;

    if (id) {
      // Fetch a specific order by ID
      orders = await prisma.order.findMany({
        where: {
          id: id,
        },
      
      });

      if (!orders || orders.length === 0) {
        return NextResponse.json(
          { message: "No orders found with the specified ID." },
          { status: 404 }
        );
      }
    } else {
      // Fetch all orders
      orders = await prisma.order.findMany({
        
      });

      if (!orders || orders.length === 0) {
        return NextResponse.json(
          { message: "No orders found." },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    return handleError(`Error fetching orders: ${error}`, error, 500);
  }
}

// POST: Create a new order
export async function POST(req: Request) {
  try {
    const { userId, products, totalPrice } = await req.json();

    // Validate required fields
    if (
      !userId ||
      !products ||
      !Array.isArray(products) ||
      products.length === 0
    ) {
      return NextResponse.json(
        { message: "Missing or invalid required fields: userId, products" },
        { status: 400 }
      );
    }

    const newOrder = await prisma.order.create({
      data: {
        userId,
        totalPrice,
        products: {
          create: products.map((product: any) => ({
            productId: product.id,
            quantity: product.quantity,
            price: product.price,
          })),
        },
      },
      include: {
        products: true,
      },
    });

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    return handleError("Error creating order", error, 500);
  }
}

// DELETE: Remove an order by orderId
export async function DELETE(req: Request) {
  try {
    const { orderId } = await req.json();

    // Validate required fields
    if (!orderId) {
      return NextResponse.json(
        { message: "Missing required field: orderId" },
        { status: 400 }
      );
    }

    const deletedOrder = await prisma.order.delete({
      where: { id: orderId },
    });

    return NextResponse.json(
      { message: "Order deleted successfully", deletedOrder },
      { status: 200 }
    );
  } catch (error) {
    return handleError("Error deleting order", error, 500);
  }
}

// PUT: Update an order (e.g., updating status or modifying products)
export async function PUT(req: Request) {
  try {
    const { orderId, ...updates } = await req.json();

    // Validate the orderId
    if (!orderId) {
      return NextResponse.json(
        { message: "Missing required field: orderId" },
        { status: 400 }
      );
    }

    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: updates,
      include: {
        products: true,
      },
    });

    return NextResponse.json(updatedOrder, { status: 200 });
  } catch (error) {
    return handleError("Error updating order", error, 500);
  }
}
