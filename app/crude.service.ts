import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  //INSERT//
  create_NewStudent(record) {
    return this.firestore.collection('Students').add(record);
  }

  //SELECT//
  read_Students() {
    return this.firestore.collection('Students').snapshotChanges();
  }

  //UPDATE//
  update_Student(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }

  //DELETE//
  delete_Student(recordID) {
    this.firestore.doc('Students/' + recordID).delete();
  }
}