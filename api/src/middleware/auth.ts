import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { CustomRequest } from "../types";
import config from "../config";

export const SECRET_KEY: string = config().jwt.access.secret!;

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new Error();
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .json({ statusCode: 403, message: "Invalid or expired token." });
      }

      (req as CustomRequest).user = decoded;
      next();
    });
  } catch (err: any) {
    console.log(err.message);
    res.status(401).json({ statusCode: 401, msg: "Authorization needed" });
  }
};
