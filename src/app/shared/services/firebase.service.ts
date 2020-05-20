import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ContactMessage } from 'src/app/contact/contact.types';
import { take, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {
    private readonly MESSAGES_TABLE: string = 'messages';

    constructor(private db: AngularFirestore) {}

    createMessage(value: ContactMessage): Promise<firebase.firestore.DocumentReference> {
        return this.db.collection(this.MESSAGES_TABLE).add(value);
    }

    getMessages() {
        return new Promise<any>((resolve, reject) => {
            this.db
                .collection(this.MESSAGES_TABLE)
                .snapshotChanges() // We are using snapshotChanges to get the data. Response is Observable.
                .pipe(
                    take(1),
                    map(messages => messages[0].payload.doc.data())
                )
                .subscribe(snapshots => {
                    resolve(snapshots);
                });
        });
    }
}
