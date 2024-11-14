import dotenv from "dotenv";
import { createServer, IncomingMessage, ServerResponse } from "http";
import next from "next";
import { URL } from "url"; // Import URL constructor from 'url' module

dotenv.config();

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req: IncomingMessage, res: ServerResponse) => {
    try {
      // Use the URL constructor to parse the request URL
      const parsedUrl: any = new URL(req.url!, `http://${req.headers.host}`);
      handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error handling request", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, () => {
    console.log(
      `> Server listening at http://localhost:${port} in ${
        dev ? "development" : "production"
      } mode`
    );
  });
});
