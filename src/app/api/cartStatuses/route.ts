
// src\app\api\cartStatuses\route.ts
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Fetch all cart statuses or a specific cart status by ID
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const cartStatus = await prisma.cartStatus.findUnique({
        where: { id: String(id) },
      });

      if (!cartStatus) {
        return NextResponse.json(
          { message: "Cart status not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(cartStatus, { status: 200 });
    }

    const cartStatuses = await prisma.cartStatus.findMany();
    return NextResponse.json(cartStatuses, { status: 200 });
  } catch (error) {
    console.error("Error fetching cart statuses:", error);
    return NextResponse.json(
      { message: "Failed to fetch cart statuses" },
      { status: 500 }
    );
  }
}

// POST: Create a new cart status
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newCartStatus = await prisma.cartStatus.create({ data });
    return NextResponse.json(newCartStatus, { status: 201 });
  } catch (error) {
    console.error("Error creating cart status:", error);
    return NextResponse.json(
      { message: "Failed to create cart status" },
      { status: 500 }
    );
  }
}

// PUT: Update an existing cart status by ID
export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const { id, ...updates } = data;

    if (!id) {
      return NextResponse.json(
        { message: "ID is required to update cart status" },
        { status: 400 }
      );
    }

    const updatedCartStatus = await prisma.cartStatus.update({
      where: { id: String(id) },
      data: updates,
    });

    return NextResponse.json(updatedCartStatus, { status: 200 });
  } catch (error) {
    console.error("Error updating cart status:", error);
    return NextResponse.json(
      { message: "Failed to update cart status" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a cart status by ID
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "ID is required to delete cart status" },
        { status: 400 }
      );
    }

    await prisma.cartStatus.delete({ where: { id: String(id) } });
    return NextResponse.json(
      { message: "Cart status deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting cart status:", error);
    return NextResponse.json(
      { message: "Failed to delete cart status" },
      { status: 500 }
    );
  }
}
