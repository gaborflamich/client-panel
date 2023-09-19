import { IEnvironment } from './environment.definitions';

// Demo, béta környezet
export const environment: IEnvironment = {
  production: true,
  type: 'staging',
  httpReqTimeout: 30,
};
