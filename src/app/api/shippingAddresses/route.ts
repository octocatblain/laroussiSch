import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Helper function for error logging and response
function handleError(message: string, error: any, status: number) {
  console.error(message, error);
  return NextResponse.json({ message }, { status });
}

// GET: Fetch all shipping addresses or filter by id if provided
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id"); // Get the optional ShippingAddress ID from query params

    let shippingAddresses;

    if (id) {
      // Fetch a specific shipping address by ID
      shippingAddresses = await prisma.shippingAddress.findUnique({
        where: { id },
        include: {
          user: true,
          addressType: true,
        },
      });

      if (!shippingAddresses) {
        return NextResponse.json(
          { message: "No shipping address found with the specified ID." },
          { status: 404 }
        );
      }
    } else {
      // Fetch all shipping addresses
      shippingAddresses = await prisma.shippingAddress.findMany({
        include: {
          user: true,
          addressType: true,
        },
      });

      if (!shippingAddresses || shippingAddresses.length === 0) {
        return NextResponse.json(
          { message: "No shipping addresses found." },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(shippingAddresses, { status: 200 });
  } catch (error) {
    return handleError("Error fetching shipping addresses", error, 500);
  }
}

// POST: Create a new shipping address
export async function POST(req: Request) {
  try {
    const {
      userId,
      firstName,
      lastName,
      address,
      apartment,
      city,
      state,
      postalCode,
      country,
      addressTypeId,
    } = await req.json();

    // Validate required fields
    if (
      !userId ||
      !firstName ||
      !lastName ||
      !address ||
      !city ||
      !state ||
      !postalCode ||
      !country ||
      !addressTypeId
    ) {
      return NextResponse.json(
        { message: "Missing or invalid required fields." },
        { status: 400 }
      );
    }

    const newShippingAddress = await prisma.shippingAddress.create({
      data: {
        userId,
        firstName,
        lastName,
        address,
        apartment,
        city,
        state,
        postalCode,
        country,
        addressTypeId,
      },
    });

    return NextResponse.json(newShippingAddress, { status: 201 });
  } catch (error) {
    return handleError("Error creating shipping address", error, 500);
  }
}

// DELETE: Remove a shipping address by id
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

    const deletedShippingAddress = await prisma.shippingAddress.delete({
      where: { id },
    });

    return NextResponse.json(
      {
        message: "Shipping address deleted successfully",
        deletedShippingAddress,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleError("Error deleting shipping address", error, 500);
  }
}

// PUT: Update a shipping address
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

    const updatedShippingAddress = await prisma.shippingAddress.update({
      where: { id },
      data: updates,
    });

    return NextResponse.json(updatedShippingAddress, { status: 200 });
  } catch (error) {
    return handleError("Error updating shipping address", error, 500);
  }
}
