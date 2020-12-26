import { Model } from 'mongoose';

export interface IModels {
    user: Model<any>;
}

export interface IUser {
    login: string;
    email: string;
    hash?: string;
    salt: string;
    name: string;
}

export type StatusDB = 'ok' | 'error' | 'initial'
