import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

import { CardsBasicPage } from '../cards-basic/cards-basic';
import { CardsHeaderPage } from '../cards-header/cards-header';
import { CardsListsPage } from '../cards-lists/cards-lists';
import { CardsImagesPage } from '../cards-images/cards-images';
import { CardsBackgroundsPage } from '../cards-backgrounds/cards-backgrounds';
import { CardsSocialPage } from '../cards-social/cards-social';
import { CardsMapPage } from '../cards-map/cards-map';

@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})

export class CardsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {}

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Cards',
      buttons: [
        {
          text: 'Basic',
          role: 'destructive',
          handler: () => {
            this.openPage(CardsBasicPage)
          }
        },
        {
          text: 'Header',
          role: 'destructive',
          handler: () => {
            this.openPage(CardsHeaderPage)
          }
        },
        {
          text: 'Lists',
          role: 'destructive',
          handler: () => {
            this.openPage(CardsListsPage)
          }
        },
        {
          text: 'Images',
          role: 'destructive',
          handler: () => {
            this.openPage(CardsImagesPage)
          }
        },
        {
          text: 'Backgrounds',
          role: 'destructive',
          handler: () => {
            this.openPage(CardsBackgroundsPage)
          }
        },
        {
          text: 'Social',
          role: 'destructive',
          handler: () => {
            this.openPage(CardsSocialPage)
          }
        },
        {
          text: 'Map',
          role: 'destructive',
          handler: () => {
            this.openPage(CardsMapPage)
          }
        }
      ]
    });
    actionSheet.present();
  }

  openPage(page: any) {
    this.navCtrl.push(page);
  }
}
