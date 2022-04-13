import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { FaqList } from '../interface/faqListInterface';

@Injectable({
  providedIn: 'root'
})
export class FaqServiceService {

  faqCollection!: AngularFirestoreCollection<FaqList>;
  faqs: Observable<FaqList[]>;

  constructor(private afs: AngularFirestore) {
    this.faqCollection = afs.collection<FaqList>('FAQ',ref => ref.orderBy('id'));
    this.faqs = this.faqCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as FaqList;
        return { ...data };
      }))
    );
    this.faqCollection = afs.collection<FaqList>('FAQ',);
  }

  getFaq() {
    return this.faqs;
  }

  addFaq(data: FaqList) {
   const newId = this.afs.createId();
   this.afs.collection('FAQ').doc(newId).set(data); 
  }
}
