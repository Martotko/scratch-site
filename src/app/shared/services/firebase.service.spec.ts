import { TestBed } from '@angular/core/testing';
import { FirebaseService } from './firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';

const angularFirestoreStub = {
    collection: {},
};

describe('FirebaseService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            providers: [{ provide: AngularFirestore, useValue: angularFirestoreStub }],
        })
    );

    it('should be created', () => {
        const service: FirebaseService = TestBed.get(FirebaseService);
        expect(service).toBeTruthy();
    });
});
