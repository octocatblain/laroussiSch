// AddressType route handlers

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

function handleError(message: string, error: any, status: number) {
  console.error(message, error);
  return NextResponse.json({ message }, { status });
}

// GET: Fetch all AddressTypes
export async function GET_ALL() {
  try {
    const addressTypes = await prisma.addressType.findMany();
    return NextResponse.json(addressTypes, { status: 200 });
  } catch (error) {
    return handleError("Error fetching address types", error, 500);
  }
}

// GET: Fetch AddressType by ID
export async function GET(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { message: "Missing required field: id" },
        { status: 400 }
      );
    }
    const addressType = await prisma.addressType.findUnique({ where: { id } });
    if (!addressType) {
      return NextResponse.json(
        { message: "AddressType not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(addressType, { status: 200 });
  } catch (error) {
    return handleError("Error fetching address type by ID", error, 500);
  }
}

// POST: Create a new AddressType
export async function POST(req: Request) {
  try {
    const { type } = await req.json();
    if (!type) {
      return NextResponse.json(
        { message: "Missing required field: type" },
        { status: 400 }
      );
    }
    const newAddressType = await prisma.addressType.create({ data: { type } });
    return NextResponse.json(newAddressType, { status: 201 });
  } catch (error) {
    return handleError("Error creating address type", error, 500);
  }
}

// PUT: Update an AddressType
export async function PUT(req: Request) {
  try {
    const { id, type } = await req.json();
    if (!id || !type) {
      return NextResponse.json(
        { message: "Missing required fields: id and type" },
        { status: 400 }
      );
    }
    const updatedAddressType = await prisma.addressType.update({
      where: { id },
      data: { type },
    });
    return NextResponse.json(updatedAddressType, { status: 200 });
  } catch (error) {
    return handleError("Error updating address type", error, 500);
  }
}

// DELETE: Delete an AddressType
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { message: "Missing required field: id" },
        { status: 400 }
      );
    }
    await prisma.addressType.delete({ where: { id } });
    return NextResponse.json(
      { message: "AddressType deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return handleError("Error deleting address type", error, 500);
  }
}
