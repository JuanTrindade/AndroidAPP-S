import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  // Insert
  create_NewStudent(record) {
    return this.firestore.collection('Students').add(record);
  }

  // Select
  read_Students() {
    return this.firestore.collection('Students').snapshotChanges();
  }

  // Update
  update_Student(record_id, record){
    this.firestore.doc('Students/' + record_id).update(record);
  }

  // Delete
  delete_Student(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }

}
