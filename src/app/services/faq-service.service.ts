import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { faqList } from '../interface/faqListInterface';

@Injectable({
  providedIn: 'root'
})
export class FaqServiceService {

  faqCollection!: AngularFirestoreCollection<faqList>;
  faqs: Observable<faqList[]>;

  constructor(private afs: AngularFirestore) { 
    this.faqs = this.afs.collection<faqList>('FAQ').valueChanges();
  }

  getFaq(){
    return this.faqs;
  }
}
