export type EnvironmentType = 'local' | 'dev' | 'staging' | 'prod';

// apiUrl:
// - Az az url amit a böngésző használ az API hívásokhoz böngésző és szerver oldalon
// vagy
//  apiUrl.clientApiUrl:
//    - Az az url amit a böngésző használ az API hívásokhoz
//  apiUrl.serverApiUrl:
//    - Az az url amit SSR-nél a Node használ az API hívásokhoz

export interface IEnvironmentApiUrl {
  readonly clientApiUrl: string;
  readonly serverApiUrl: string;
}

export interface IEnvironment {
  readonly production: boolean;
  readonly type: EnvironmentType;
  readonly apiUrl?: string | IEnvironmentApiUrl;
  readonly httpReqTimeout: number;
  readonly firebase: IFireStore;
}

export interface IFireStore {
  readonly apiKey: string;
  readonly authDomain: string;
  readonly projectId: string;
  readonly storageBucket: string;
  readonly messagingSenderId: string;
  readonly appId: string;
}

export interface IRealtTimeDB {
  readonly apiKey: string;
  readonly authDomain: string;
  readonly databaseURL: string;
  readonly projectId: string;
  readonly storageBucket: string;
  readonly messagingSenderId: string;
  readonly appId: string;
  readonly measurementId: string;
}
