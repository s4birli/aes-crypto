import { Request, Response } from "express";
import { saveFile } from "../service/file.service";
import encryptFile from "../utils/decrpty";
import logger from "../utils/logger";

export async function uploadFile(req: Request, res: Response) {
  try {
    encryptFile(req.body.file, req.body.iv).then(async (data) => {
      await saveFile(req);
      logger.info(req);
      return res.status(200).send(data);
    });
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}
