import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, ToastController } from 'ionic-angular';

import { Category } from '../category/categoryModel';
import { DataService } from '../../services/data.service';

@IonicPage()
@Component({
  selector: 'page-add-category',
  templateUrl: 'add-category.html',
  providers: [DataService]
})
export class AddCategoryPage {
category:Category;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private _dataService: DataService) {

  }
  submitForm(c){
    this._dataService.addCategory(c);
    this.navCtrl.pop();
    this.presentToast('Catégorie sauvegardée avec succés!');
  }
  presentToast(msg:string){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000
  });
  toast.present();
  }
}
