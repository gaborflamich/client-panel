import { IEnvironment } from './environment.definitions';

// Demo, béta környezet
export const environment: IEnvironment = {
  firebase: {
    projectId: 'clientpanel-cbcfe',
    appId: '1:245880180468:web:2d86269191d8b7250d58a1',
    storageBucket: 'clientpanel-cbcfe.appspot.com',
    apiKey: 'AIzaSyD-L1kM1Owe__L1iLW1l2n-mLHFO2aq1pI',
    authDomain: 'clientpanel-cbcfe.firebaseapp.com',
    messagingSenderId: '245880180468',
  },
  production: true,
  type: 'staging',
  httpReqTimeout: 30,
};
