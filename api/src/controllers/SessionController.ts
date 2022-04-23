import { Request, Response } from 'express';

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
          return res.status(403).json(err);
        }
      }
    );
  },
};
export default SessionController;
