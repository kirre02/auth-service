import { Request, Response } from "express";

class authController {
  static login(req: Request, res:Response ) {
    // check if username and password are 
    const { username, password } = req.body
    if(!(username && password)) {
      res.status(400).send()
    }
    
    // Get user from database

    //check if encrypted password match

    // sign JWT

    // send JWT as a response
  }
}

export default authController
