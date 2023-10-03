import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IClient } from '../definitions/client.definitions';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<IClient>;
  clientDoc: AngularFirestoreDocument<IClient>;
  clients$: Observable<IClient[]>;
  client$: Observable<IClient>;

  constructor(private readonly afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('clients', (ref) => ref.orderBy('lastName', 'asc'));
  }

  getClients$(): Observable<IClient[]> {
    this.clients$ = this.clientsCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as IClient;
          const id = action.payload.doc.id;
          return { ...data, id }; // itt hozzuk létre az új objektumot
        });
      })
    );

    return this.clients$;
  }
}
