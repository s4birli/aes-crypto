import { Express, Request, Response } from "express";
import { uploadFile } from "./controller/file.controller";
import validateResource from "./middleware/validateResource";
import { FileSchema } from "./schema/file.schema";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.sendStatus(200);
  });
  app.post("/api/upload", validateResource(FileSchema.file.upload), uploadFile);
}

export default routes;
