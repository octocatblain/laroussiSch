// File: /pages/api/upload.js
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const file = req.files.file;
    const fileName = `${uuidv4()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public/uploads", fileName);

    fs.writeFileSync(filePath, file.data);

    res.status(200).json({ imageUrl: `/uploads/${fileName}` });
  } else {
    res.status(405).end("Method not allowed");
  }
}
