import { IEnvironment } from './environment.definitions';

// Lokális fejlesztői környezet
export const environment: IEnvironment = {
  production: false,
  type: 'local',
  httpReqTimeout: 30,
};
