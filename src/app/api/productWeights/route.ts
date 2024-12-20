// src\app\api\productWeights\route.ts

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Fetch all product weights
export async function GET() {
  try {
    const productWeights = await prisma.productWeight.findMany();
    return NextResponse.json(productWeights, { status: 200 });
  } catch (error) {
    console.error("Error fetching product weights:", error);
    return NextResponse.json(
      { message: "Failed to fetch product weights" },
      { status: 500 }
    );
  }
}

// POST: Create a new product weight
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newProductWeight = await prisma.productWeight.create({ data });
    return NextResponse.json(newProductWeight, { status: 201 });
  } catch (error) {
    console.error("Error creating product weight:", error);
    return NextResponse.json(
      { message: "Failed to create product weight" },
      { status: 500 }
    );
  }
}

// PUT: Update an existing product weight
export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const { id, ...updates } = data;

    const updatedProductWeight = await prisma.productWeight.update({
      where: { id },
      data: updates,
    });
    return NextResponse.json(updatedProductWeight, { status: 200 });
  } catch (error) {
    console.error("Error updating product weight:", error);
    return NextResponse.json(
      { message: "Failed to update product weight" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a product weight
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.productWeight.delete({ where: { id } });
    return NextResponse.json(
      { message: "Product weight deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product weight:", error);
    return NextResponse.json(
      { message: "Failed to delete product weight" },
      { status: 500 }
    );
  }
}
