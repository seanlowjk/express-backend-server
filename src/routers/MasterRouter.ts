import { Router } from 'express';
import OperationsRouter from './operations/OperationsRouter';

class MasterRouter {
  private _router = Router();
  private _subrouterA = OperationsRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/', this._subrouterA);
  }
}

export = new MasterRouter().router;