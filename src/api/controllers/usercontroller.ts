import { Request, Response } from "express";
import { db } from "../../utils/db";
import { hashPw } from "../../utils/hash";

class userController {
  static async listAll(req: Request, res: Response) {
    try {
      // Get users from the database
      const users = await db.user.findMany();
      res.json(users);
    } catch (error) {
      res.json({
        error: error,
      });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      // get the id from the url
      const id: string = req.params.id;

      // Get the specific user from the database
      const user = await db.user.findUnique({
        where: {
          id: id,
        },
      });
      res.send(user);
    } catch (error) {
      if (res.status(400)) {
        res.json({ error: error });
      }
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      if (!username || !email || !password) {
        res.status(400).json("input or inputs are missing");
        return res.end();
      }

      const hashed = hashPw(password);
      const newUser = await db.user.create({
        data: {
          userName: username,
          email: email,
          password: hashed,
        },
      });
      res.send({
        message: `${newUser.userName} account has been created`,
      });
    } catch (error) {
      if (res.status(400)) {
        res.send({ message: error });
      }
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const id: string = req.params.id;

      const user = await db.user.delete({
        where: {
          id: id,
        },
      });
      res.send().json({
        message: `${user.userName} has been deleted`,
      });
    } catch (error) {
      if (res.status(400)) {
        res.json({ error: error });
      }
    }
  }
}

export default userController;
