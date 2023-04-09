import { Request, Response } from "express";
import { db } from "../../utils/db";
import { hashPw } from "../../utils/hash";

class userController {
  static async listAll(req: Request, res: Response) {
    try {
      // Get users from the database
      const users = await db.user.findMany();
      return res.json(users);
    } catch (error) {
      return res.json({
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
      return res.send(user);
    } catch (error) {
      return res.json({
        error: error,
      });
    }
  }

  static async createUser(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const hashed: any = hashPw(password);
      const newUser = await db.user.create({
        data: {
          userName: username,
          email: email,
          password: hashed,
        },
      });
      return res.json({
        message: `${newUser.userName} account has been created`,
      });
    } catch (error) {
      return res.json({ error: error });
    }
  }
}

export default userController;
