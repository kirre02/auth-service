import { Request, Response, NextFunction } from "express";

export function checkRole(
  roles: Array<Enumerator>,
  req: Request,
  res: Response,
  next: NextFunction
) {
  //get the user id from previous middleware
  const id = res.locals.jwtPayload.userId;

  //get user role from the database
}
