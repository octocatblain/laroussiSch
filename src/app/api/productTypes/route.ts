// src\app\api\productTypes\route.ts
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Fetch all product types
export async function GET() {
  try {
    const productTypes = await prisma?.productType.findMany();
    return NextResponse.json(productTypes, { status: 200 });
  } catch (error) {
    console.error("Error fetching product types:", error);
    return NextResponse.json(
      { message: "Failed to fetch product types" },
      { status: 500 }
    );
  }
}

// POST: Create a new product type
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newProductType = await prisma.productType.create({ data });
    return NextResponse.json(newProductType, { status: 201 });
  } catch (error) {
    console.error("Error creating product type:", error);
    return NextResponse.json(
      { message: "Failed to create product type" },
      { status: 500 }
    );
  }
}

// PUT: Update an existing product type
export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const { id, ...updates } = data;

    const updatedProductType = await prisma.productType.update({
      where: { id },
      data: updates,
    });
    return NextResponse.json(updatedProductType, { status: 200 });
  } catch (error) {
    console.error("Error updating product type:", error);
    return NextResponse.json(
      { message: "Failed to update product type" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a product type
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.productType.delete({ where: { id } });
    return NextResponse.json(
      { message: "Product type deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product type:", error);
    return NextResponse.json(
      { message: "Failed to delete product type" },
      { status: 500 }
    );
  }
}
