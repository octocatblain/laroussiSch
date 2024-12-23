import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

// Define the upload directory
const uploadDirectory = path.join(process.cwd(), "public", "uploads", "profilePictures");

// Ensure the upload directory exists
const ensureUploadDirectory = (): void => {
    if (!fs.existsSync(uploadDirectory)) {
        fs.mkdirSync(uploadDirectory, { recursive: true });
    }
};

// POST handler for profile picture upload
export async function POST(req: Request) {
    ensureUploadDirectory();

    try {
        const formData = await req.formData();
        const file: any = formData.get("file") as Blob;

        if (!file) {
            return NextResponse.json(
                { message: "No file uploaded" },
                { status: 400 }
            );
        }

        // Read file data
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Sanitize file name and add timestamp
        const timestamp = Date.now();
        const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const fileName = `${timestamp}-${sanitizedFilename}`;
        const filePath = path.join(uploadDirectory, fileName);

        // Save the file to the uploads directory
        fs.writeFileSync(filePath, buffer);

        // Generate public URL for the file
        const fileUrl = `/uploads/profilePictures/${fileName}`;
        return NextResponse.json({ filePath: fileUrl }, { status: 200 });
    } catch (error: any) {
        console.error("File upload error:", error.message || error);
        return NextResponse.json(
            { message: "File upload failed", error: error.message || "Unknown error" },
            { status: 500 }
        );
    }
}
