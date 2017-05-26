import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Category } from './categoryModel';
import { DataService } from '../../services/data.service';
import { AddNotePage } from '../add-note/add-note';
import { AddCategoryPage } from '../add-category/add-category';

@Component({
  selector: 'page-category',
  providers:[ DataService, AddCategoryPage ],
  templateUrl: 'category.html'
})
export class CategoryPage {
  categories: Category[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private _dataService:DataService
    ){
    console.log('Constructeur note appelé');
    this.categories = this._dataService.getCategories();
  }
  showPrompt(c:Category) {
    let prompt = this.alertCtrl.create({
      title: 'Catégorie',
      message: "Modifier la catégorie",
      inputs: [
        {
          name: 'name',
          placeholder: 'Nom',
          value: c.name
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sauvegarder',
          handler: data => {
            console.log(data);
            c.name = data.name;
            this._dataService.editCategory(c);
            this.presentToast('Catégorie modifiée avec succés!');
          }
        }
      ]
    });
    prompt.present();
  }
  presentToast(msg:string){
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000
  });
  toast.present();
  }

  catEdit(c: Category){
    //c.id=this.editId;
    console.log('Catégorie ' + c.id + ' à modifier');
    this._dataService.editCategory(c);
  }

  catDelete(i: any){
    console.log('Catégorie ' + i + ' à supprimer');
  }

  addCategory(){
    this.navCtrl.push(AddCategoryPage);
  }

}
