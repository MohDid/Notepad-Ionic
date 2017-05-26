import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController } from 'ionic-angular';

import { Category } from '../category/categoryModel';
import { Note } from '../note/noteModel';
import { DataService } from '../../services/data.service';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
  providers: [DataService]
})
export class AddNotePage {
n:Note;
toEditNote:Note;
categories:Category[];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private _dataService: DataService) {
      this.categories = this._dataService.getCategories();
      // this.n.id=navParams.get('enid');
      // this.n.title=navParams.get('entitle');
      // console.log('Titre recu:' + this.n.title);
  }
  submitForm(n){
    this._dataService.addNote(n);
    this.navCtrl.pop();
    this.presentToast('Note sauvegardée avec succés!');
  }
  presentToast(msg:string){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000
  });
  toast.present();
  }
}
