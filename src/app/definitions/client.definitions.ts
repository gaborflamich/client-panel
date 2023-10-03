import { DocumentData } from 'firebase/firestore';

export interface IClient extends DocumentData {
  readonly id?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly phone?: string;
  readonly balance?: number;
}
