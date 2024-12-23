import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

// Define the upload directory
const uploadDirectory = path.join(process.cwd(), "public", "uploads", "ids");

// Ensure the upload directory exists
const ensureUploadDirectory = (): void => {
  if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
  }
};

// POST handler for file upload
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

    // Save file to the uploads directory
    const fileName = `${Date.now()}-${file?.name}`;
    const filePath = path.join(uploadDirectory, fileName);
    fs.writeFileSync(filePath, buffer);

    // Return the file's public URL
    const fileUrl = `/uploads/ids/${fileName}`;
    return NextResponse.json({ filePath: fileUrl }, { status: 200 });
  } catch (error) {
    console.error("File upload error:", error);
    return NextResponse.json(
      { message: "File upload failed", error: error.message },
      { status: 500 }
    );
  }
}
