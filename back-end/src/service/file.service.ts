import { omit } from "lodash";
import logger from "../utils/logger";
import { Request } from "express";

export async function saveFile(req: Request) {
  try {
    const savedData = {
      file_name: req.body.file_name,
      user_id: req.body.user_id,
      extension: req.body.file_type,
      file: req.body.file,
    };
    return omit(savedData);
  } catch (error: any) {
    logger.error(error.message);
    throw new Error(error);
  }
}
