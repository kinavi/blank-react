import { SchemaOptions, SchemaDefinition, ConnectionOptions } from 'mongoose';

export const COMMON_OPTIONS: SchemaOptions = {
  versionKey: false,
};

export const USER: SchemaDefinition = {
  login: String,
  email: String,
  hash: String,
  salt: String,
  name: String,
};

export enum MODELS {
  user = 'user',
}

export const getConnectOptions = (dbName: string): ConnectionOptions => ({
  dbName,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
});
