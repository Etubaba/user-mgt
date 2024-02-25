import { Request, Response, NextFunction } from "express";
export declare const SECRET_KEY: string;
export declare const authenticate: (req: Request, res: Response, next: NextFunction) => Promise<void>;
