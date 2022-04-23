import { Request, Response } from 'express';

import nixService from '../services/nix';
const PurchaseController = {
  async store(req: Request, res: Response) {},
  async show(req: Request, res: Response) {
    const { id } = req.params;
  },
  async showByUser(req: Request, res: Response) {},
};
export default PurchaseController;
