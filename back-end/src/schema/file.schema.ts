import Joi from "joi";
import { IFile } from "../models/file.model";

export const FileSchema = {
  file: {
    upload: Joi.object<IFile>({
      file_name: Joi.string(),
      user_id: Joi.number(),
      extension: Joi.string(),
      file: Joi.string(),
      iv: Joi.string(),
    }),
  },
};
