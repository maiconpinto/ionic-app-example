import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

import { ButtonsColorsPage } from '../buttons-colors/buttons-colors';
import { ButtonsOutlinePage } from '../buttons-outline/buttons-outline';
import { ButtonsClearPage } from '../buttons-clear/buttons-clear';
import { ButtonsRoundPage } from '../buttons-round/buttons-round';
import { ButtonsBlockPage } from '../buttons-block/buttons-block';
import { ButtonsFullPage } from '../buttons-full/buttons-full';
import { ButtonsSizesPage } from '../buttons-sizes/buttons-sizes';
import { ButtonsIconsPage } from '../buttons-icons/buttons-icons';
import { ButtonsComponentsPage } from '../buttons-components/buttons-components';

@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html'
})
export class ButtonsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {}

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Buttons',
      buttons: [
        {
          text: 'Colors',
          role: 'destructive',
          handler: () => {
            this.openPage(ButtonsColorsPage)
          }
        },
        {
          text: 'Outline',
          role: 'destructive',
          handler: () => {
            this.openPage(ButtonsOutlinePage)
          }
        },
        {
          text: 'Clear',
          role: 'destructive',
          handler: () => {
            this.openPage(ButtonsClearPage)
          }
        },
        {
          text: 'Round',
          role: 'destructive',
          handler: () => {
            this.openPage(ButtonsRoundPage)
          }
        },
        {
          text: 'Block',
          role: 'destructive',
          handler: () => {
            this.openPage(ButtonsBlockPage)
          }
        },
        {
          text: 'Full',
          role: 'destructive',
          handler: () => {
            this.openPage(ButtonsFullPage)
          }
        },
        {
          text: 'Sizes',
          role: 'destructive',
          handler: () => {
            this.openPage(ButtonsSizesPage)
          }
        },
        {
          text: 'Icons',
          role: 'destructive',
          handler: () => {
            this.openPage(ButtonsIconsPage)
          }
        },
        {
          text: 'Components',
          role: 'destructive',
          handler: () => {
            this.openPage(ButtonsComponentsPage)
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
