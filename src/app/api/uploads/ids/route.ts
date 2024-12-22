import { IncomingForm } from "formidable";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

// Ensure the uploads folder exists
const uploadDirectory = path.join(
  process.cwd(),
  "public",
  "uploads",
  "users",
  "ids"
);

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory, { recursive: true });
}

export async function POST(req: Request) {
  const form = new IncomingForm({
    uploadDir: uploadDirectory,
    keepExtensions: true, // Keep the file extension (e.g., .jpg, .png)
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Error parsing form data:", err);
        return resolve(
          NextResponse.json(
            { message: "Error processing form data" },
            { status: 500 }
          )
        );
      }

      const file = files.file[0]; // Assuming single file upload

      if (!file) {
        return resolve(
          NextResponse.json({ message: "No file uploaded" }, { status: 400 })
        );
      }

      const fileName = `${new Date().toISOString().replace(/[:.]/g, "-")}-${file.originalFilename}`;
      const newFilePath = path.join(uploadDirectory, fileName);

      // Move the file to the desired folder
      fs.renameSync(file.filepath, newFilePath);

      // Return the file path for further processing on the frontend
      const filePath = `/uploads/users/ids/${fileName}`;
      resolve(NextResponse.json({ filePath }, { status: 200 }));
    });
  });
}
