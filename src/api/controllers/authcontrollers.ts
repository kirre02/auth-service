import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { db } from "../../utils/db";
import isPasswordValid from "../../utils/checkPassword";
import config from "../../../config/config";
import { hashPw } from "../../utils/hash";

class authController {
  static async login(req: Request, res: Response) {
    // check if email and password are in the body
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send();
    }

    // Get user from database
    const user = await db.user.findUnique({
      where: { email: email },
    });

    //check if encrypted password match
    if (!isPasswordValid(password, user.password)) {
      res.status(401).send();
      return;
    }

    // sign JWT, valid for
    const token = jwt.sign({ userId: user.id, email: email }, config.jwtSecret);

    // send JWT as a response
    res.json({ token });
  }

  static async changePassword(res: Response, req: Request) {
    // Get id from JWT
    const id = res.locals.jwtPayload.userId;

    // Get parameters from the body
    const { oldPw, newPw } = req.body;
    if (!oldPw && newPw) {
      res.status(401).send();
    }

    // Check if old password matches
    if (!isPasswordValid(oldPw, newPw)) {
      res.status(400).send();
    }

    //Hash the new password and save
    hashPw(newPw);

    const user = await db.user.update({
      where: {
        id: id,
      },
      data: {
        password: newPw,
      },
    });

    res.json({
      message: `${user.userName} password has been changed`,
    });
  }
}

export default authController;
