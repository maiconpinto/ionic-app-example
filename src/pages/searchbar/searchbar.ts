import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertPage } from '../alert/alert';

@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html'
})
export class SearchbarPage {

  searchQuery: string = '';
  items: Array<{name: string, imgSrc: string, component: any, description: string }> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  listItens() {
    return [
      {name: 'Amsterdam', imgSrc: 'assets/img/advance-card-bttf.png', component: AlertPage, description: 'Amsterdam dedo'},
      {name: 'Bogota', imgSrc: 'assets/img/advance-card-bttf.png', component: AlertPage, description: 'Bogota mao'},
      {name: 'Cairo', imgSrc: 'assets/img/advance-card-bttf.png', component: AlertPage, description: 'Cairo barriga'}
    ];
  }

  initializeItems() {
    this.items = this.listItens();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}
