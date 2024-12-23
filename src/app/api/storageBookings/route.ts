import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Helper function for error logging and response
function handleError(message: string, error: any, status: number) {
  console.error(message, error);
  return NextResponse.json({ message }, { status });
}

// GET: Fetch all storage bookings
export async function GET() {
  try {
    const storageBookings = await prisma.storageBooking.findMany();
    return NextResponse.json(storageBookings, { status: 200 });
  } catch (error) {
    return handleError("Error fetching storage bookings", error, 500);
  }
}

// POST: Create a new storage booking
export async function POST(req: Request) {
  try {
    const requestData = await req.json();
    console.log("Received form data:", requestData);

    const {
      name,
      email,
      phone,
      dateOfBirth,
      address = null,
      zipCodeCity = null,
      message = null,
      storageLocationId = null,
      idFile = null,
    } = requestData;

    // Validate required fields
    if (!name || !idFile || !email || !phone || !dateOfBirth) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, phone, dateOfBirth" },
        { status: 400 }
      );
    }

    // Create storage booking
    const newStorageBooking = await prisma.storageBooking.create({
      data: {
        name,
        email,
        phone,
        dateOfBirth: new Date(dateOfBirth), // Parse date
        address,
        zipCodeCity,
        message,
        storageLocationId,
        idFile,
      },
    });

    console.log("Storage booking created successfully:", newStorageBooking);

    return NextResponse.json(newStorageBooking, { status: 201 });
  } catch (error) {
    console.error("Error creating storage booking:", error);
    return NextResponse.json(
      { message: "Failed to create storage booking", error: error.message },
      { status: 500 }
    );
  }
}


// PUT: Update an existing storage booking
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

    const updatedStorageBooking = await prisma.storageBooking.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json(updatedStorageBooking, { status: 200 });
  } catch (error) {
    return handleError("Error updating storage booking", error, 500);
  }
}

// DELETE: Delete a storage booking
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    // Validate the ID
    if (!id) {
      return NextResponse.json(
        { message: "Missing required field: id" },
        { status: 400 }
      );
    }

    await prisma.storageBooking.delete({ where: { id } });
    return NextResponse.json(
      { message: "Storage booking deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return handleError("Error deleting storage booking", error, 500);
  }
}
