import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { DataService } from '../../services/data.service';
import { Note } from './noteModel';
import { Category } from '../category/categoryModel';
import { AddNotePage } from '../add-note/add-note';


@Component({
  selector: 'page-note',
  providers:[ DataService, AddNotePage ],
  templateUrl: 'note.html'
})
export class NotePage {
  notes: Note[];
  n: Note;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private _dataService: DataService) {

      console.log('Constructeur note appelé');
      this.displayNotes();
  }
  editNote(n) {
    // this.navCtrl.push(AddNotePage, {
    //   enid : n.id,
    //   entitle: n.title,
    //   endate: n.date,
    //   encontent: n.content
    // });
    this.navCtrl.push(AddNotePage);
  }
  addNewNote(){
    this.navCtrl.push(AddNotePage);
  }

  displayNotes(){
      this.notes = this._dataService.getNotes();
      console.log('Notes :' + this.notes);
  }
  delNote(nId:number){
    this._dataService.delNote(nId);
    //this.navCtrl.push(NotePage);
    this.navCtrl.popToRoot();
  }

}
