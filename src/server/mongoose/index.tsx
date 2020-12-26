import {
  model, connect,
} from 'mongoose';
import { UserSchema } from './Schems/user';
import {
  USER,
  MODELS,
  getConnectOptions,
} from './constants';
import { IModels, StatusDB } from './types';

export class TimerMongoose {
  private _url: string;

  private _models: IModels | null;

  get Models() {
    return this._models;
  }

  private _dbName: string;

  public Status: StatusDB;

  constructor(url: string, dbName: string) {
    this._url = url;
    this._dbName = dbName;
    this.Status = 'initial';
    this._models = null;
  }

  private handleError = (error: string): void => {
    console.log('error', error);
  }

  private setModels = () => {
    this._models = {
      user: model(MODELS.user, new UserSchema(USER).Schema),
      // extra models
    };
  }

  public SetConnect = async (): Promise<void> => connect(this._url, getConnectOptions(this._dbName))
    .then(() => {
      this.setModels();
      this.Status = 'ok';
    })
    .catch((error) => {
      this.Status = 'error';
      this.handleError(error);
    })
}
