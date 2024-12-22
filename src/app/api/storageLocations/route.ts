// src\app\api\storageLocations\route.ts

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Fetch all storage locations
export async function GET() {
  try {
    const storageLocations = await prisma.storageLocation.findMany();
    return NextResponse.json(storageLocations, { status: 200 });
  } catch (error) {
    console.error("Error fetching storage locations:", error);
    return NextResponse.json(
      { message: "Failed to fetch storage locations" },
      { status: 500 }
    );
  }
}

// POST: Create a new storage location
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newstorageLocation = await prisma.storageLocation.create({ data });
    return NextResponse.json(newstorageLocation, { status: 201 });
  } catch (error) {
    console.error("Error creating storage location:", error);
    return NextResponse.json(
      { message: "Failed to create storage location" },
      { status: 500 }
    );
  }
}

// PUT: Update an existing storage location
export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const { id, ...updates } = data;

    const updatedstorageLocation = await prisma.storageLocation.update({
      where: { id },
      data: updates,
    });
    return NextResponse.json(updatedstorageLocation, { status: 200 });
  } catch (error) {
    console.error("Error updating storage location:", error);
    return NextResponse.json(
      { message: "Failed to update storage location" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a storage location
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.storageLocation.delete({ where: { id } });
    return NextResponse.json(
      { message: "storage location deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting storage location:", error);
    return NextResponse.json(
      { message: "Failed to delete storage location" },
      { status: 500 }
    );
  }
}
