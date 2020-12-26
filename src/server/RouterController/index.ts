import { Request, Response, Router } from 'express';
import { IModels } from '../mongoose/types';
import { View } from '../ViewController';
import {
  login,
  register,
} from './api';

export class RouterController {
    private readonly _router: Router;

    public get Router() {
      return this._router;
    }

    constructor() {
      this._router = Router();
    }

    public InitialRouters = (authenticate: any, models: IModels) => {
      this._router.get('/', (req: Request, res: Response) => {
        res.send(View.renderMainPage(null, req.url));
      });

      this._router.post('/api/login', login(models));
      this._router.post('/api/register', register(models));
      // contine routs...
    }
}
