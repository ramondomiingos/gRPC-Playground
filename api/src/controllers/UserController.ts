import { rejects } from 'assert';
import { verify } from 'crypto';
import { Request, Response } from 'express';
import hidraService from '../services/hidra';
const UserController = {
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const response = await new Promise((resolve, reject) => {
      hidraService.getUserById({ id }, (err: any, response: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
    return res.json(response);
  },
  async store(req: Request, res: Response) {
    const { email, username, password } = req.body;
    hidraService.registerUser(
      { user: { email, username, password } },
      function (err: any, response: any) {
        if (err) {
          return res.status(400).json(err);
        } else {
          return res.json(response);
        }
      }
    );
  },
};
export default UserController;
