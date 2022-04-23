import { Request, Response } from 'express';
import { promisify } from 'util';
import hidraService from '../services/hidra';
const SessionController = {
  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    hidraService.loginUser(
      {
        user: { email, password },
      },
      (err: any, sucess: any) => {
        if (sucess) {
          return res.json(sucess);
        } else {
          console.log(`erro`);
          return res.status(403).json(err);
        }
      }
    );
  },
};
export default SessionController;
