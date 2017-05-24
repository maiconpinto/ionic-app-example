import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { BadgesPage } from '../badges/badges';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  products: Array<{name: string, imgSrc: string, component: any }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.initializeItems();

  }

  initializeItems() {
    this.products = this.getItens();
  }

  getItens() {
    return [
      {name: 'Amsterdam', imgSrc: 'assets/img/advance-card-bttf.png', component: BadgesPage, description: 'Amsterdam dedo'},
      {name: 'Bogota', imgSrc: 'assets/img/advance-card-bttf.png', component: BadgesPage, description: 'Bogota mao'},
      {name: 'Cairo', imgSrc: 'assets/img/advance-card-bttf.png', component: BadgesPage, description: 'Cairo barriga'}
    ];
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
}
