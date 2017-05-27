import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

import { ListsBasicPage } from '../lists-basic/lists-basic';
import { ListsNoLinesPage } from '../lists-no-lines/lists-no-lines';
import { ListsInsetPage } from '../lists-inset/lists-inset';
import { ListsDividersPage } from '../lists-dividers/lists-dividers';

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {}

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Cards',
      buttons: [
        {
          text: 'Basic Lists',
          role: 'destructive',
          handler: () => {
            this.openPage(ListsBasicPage)
          }
        },
        {
          text: 'No Lines',
          role: 'destructive',
          handler: () => {
            this.openPage(ListsNoLinesPage)
          }
        },
        {
          text: 'Inset List',
          role: 'destructive',
          handler: () => {
            this.openPage(ListsInsetPage)
          }
        },
        {
          text: 'List Dividers',
          role: 'destructive',
          handler: () => {
            this.openPage(ListsDividersPage)
          }
        },
      ]
    });
    actionSheet.present();
  }

  openPage(page: any) {
    this.navCtrl.push(page);
  }
}
