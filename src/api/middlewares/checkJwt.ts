import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../../../config/config";

export function checkJwt(req: Request, res: Response, next: NextFunction) {
  // Get the jwt token from the head
  const token = <string>req.headers["auth"];
  let jwtPayload;

  // try validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, config.jwtSecret);
    res.locals.jwtPayload = jwtPayload;
  } catch (error) {
    // if token is not valid, respond with a 401
    res.status(401).send();
    return;
  }

  // we also want to send a new token for every Request
  const { userid, username } = jwtPayload;
  const newToken = jwt.sign({ userid, username }, config.jwtSecret, {
    expiresIn: "1h",
  });
  res.setHeader("token", newToken);

  // Call the next middleware or controller
  next();
}
