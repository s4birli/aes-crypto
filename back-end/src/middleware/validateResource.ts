import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";
import Joi, { ObjectSchema } from "joi";

const validateResource = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (e: any) {
      logger.error(e.errors);
      return res.status(400).send(e.errors);
    }
  };
};

export default validateResource;
