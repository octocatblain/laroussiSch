import prisma from "@/lib/prisma";
import formidable, { IncomingForm } from "formidable";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export const config = {
  api: {
    bodyParser: false, // Disable default body parser for file uploads
  },
};

const uploadDirectory = path.join(
  process.cwd(),
  "public",
  "uploads",
  "users",
  "ids"
);

// GET: Fetch all storage bookings
export async function GET() {
  try {
    const storageBookings = await prisma.storageBooking.findMany();
    return NextResponse.json(storageBookings, { status: 200 });
  } catch (error) {
    console.error("Error fetching storage bookings:", error);
    return NextResponse.json(
      { message: "Failed to fetch storage bookings" },
      { status: 500 }
    );
  }
}

// POST: Create a new storage booking with image upload
export async function POST(req: Request) {
  const form = new formidable.IncomingForm({
    uploadDir: uploadDirectory,
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // Optional: limit file size to 10MB
  });

  // Ensure upload directory exists
  if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form data:", err);
        return resolve(
          NextResponse.json(
            { message: "Error processing form data" },
            { status: 500 }
          )
        );
      }

      try {
        // Log the parsed fields and files
        console.log("Parsed Fields:", fields);
        console.log("Parsed Files:", files);

        // Extract user details and uploaded file
        const {
          name,
          email,
          phone,
          dateOfBirth,
          address,
          zipCodeCity,
          message,
          storageLocationId,
        } = fields;
        const idFile = files.idFile as any; // Use `any` to handle the file correctly

        // Validate the file
        if (!idFile) {
          console.error("ID file is missing");
          return resolve(
            NextResponse.json(
              { message: "ID file is required for booking" },
              { status: 400 }
            )
          );
        }

        // Log the file details
        console.log("ID File Details:", idFile);

        // Ensure it's an image
        if (!idFile.mimetype?.startsWith("image/")) {
          console.error("Uploaded file is not an image");
          return resolve(
            NextResponse.json(
              { message: "Uploaded file must be an image" },
              { status: 400 }
            )
          );
        }

        // Generate a sanitized filename with the user's name and timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const sanitizedFileName = name
          .toString()
          .replace(/[^a-z0-9]/gi, "_")
          .toLowerCase();
        const newFileName = `${sanitizedFileName}_${timestamp}${path.extname(idFile.originalFilename || "")}`;
        const newFilePath = path.join(uploadDirectory, newFileName);

        // Log the new file name and path
        console.log("New File Name:", newFileName);
        console.log("New File Path:", newFilePath);

        // Move the file to the new location
        fs.renameSync(idFile.filepath, newFilePath);
        console.log("File moved successfully");

        // Set the file path for database storage (this is the string you want)
        const idFilePath = `/uploads/users/ids/${newFileName}`;

        // Log the file path being saved
        console.log("Saving ID file path:", idFilePath);

        // Save the booking to the database with the file path as a string
        const newStorageBooking = await prisma.storageBooking.create({
          data: {
            name: name.toString(),
            email: email.toString(),
            phone: phone.toString(),
            dateOfBirth: new Date(dateOfBirth.toString()),
            address: address.toString(),
            zipCodeCity: zipCodeCity.toString(),
            message: message ? message.toString() : null,
            storageLocationId: storageLocationId
              ? storageLocationId.toString()
              : null,
            idFile: idFilePath, // Store the file path (string) in the database
          },
        });

        // Log the successful database insertion
        console.log("Booking saved successfully:", newStorageBooking);

        return resolve(NextResponse.json(newStorageBooking, { status: 201 }));
      } catch (error) {
        console.error("Error creating storage booking:", error);
        return resolve(
          NextResponse.json(
            { message: "Failed to create storage booking" },
            { status: 500 }
          )
        );
      }
    });
  });
}

// PUT: Update an existing storage booking
export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const { id, ...updates } = data;

    const updatedStorageBooking = await prisma.storageBooking.update({
      where: { id },
      data: updates,
    });
    return NextResponse.json(updatedStorageBooking, { status: 200 });
  } catch (error) {
    console.error("Error updating storage booking:", error);
    return NextResponse.json(
      { message: "Failed to update storage booking" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a storage booking
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await prisma.storageBooking.delete({ where: { id } });
    return NextResponse.json(
      { message: "Storage booking deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting storage booking:", error);
    return NextResponse.json(
      { message: "Failed to delete storage booking" },
      { status: 500 }
    );
  }
}
