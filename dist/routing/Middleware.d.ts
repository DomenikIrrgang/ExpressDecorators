import { Request, Response, NextFunction } from "express";
export interface Middleware {
    onRequest(request: Request, response: Response, next: NextFunction): any;
}
