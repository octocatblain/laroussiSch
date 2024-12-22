// src/app/api/upload.js
import formidable from "formidable";
import fs from "fs";
import { getSession } from "next-auth/react";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// Disable Next.js body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), "public/uploads");
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing the form:", err);
        return res.status(500).json({ message: "Failed to parse the file" });
      }

      const file = files.file; // `files.file` directly refers to the uploaded file object

      if (!file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      try {
        const fileName = `${uuidv4()}-${file.originalFilename}`;
        const filePath = path.join(process.cwd(), "public/uploads", fileName);

        // Move the file to the public/uploads folder
        fs.renameSync(file.filepath, filePath);

        // Respond with the file's URL (relative path)
        const imageUrl = `/uploads/${fileName}`;
        return res.status(200).json({ imageUrl });
      } catch (error) {
        console.error("Error uploading file:", error);
        return res.status(500).json({ message: "Failed to upload file" });
      }
    });
  } else {
    res.status(405).end("Method not allowed");
  }
}
