import { Request, Response } from "express";
declare const createUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const editUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const refreshToken: (req: Request, res: Response) => Promise<void>;
export { editUser, createUser, loginUser, refreshToken };
