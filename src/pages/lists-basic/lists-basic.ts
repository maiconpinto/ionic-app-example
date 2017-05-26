import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-lists-basic',
  templateUrl: 'lists-basic.html'
})
export class ListsBasicPage {

  items: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      'Pokémon Yellow',
      'Super Metroid',
      'Mega Man X',
      'The Legend of Zelda',
      'Pac-Man',
      'Super Mario World',
      'Street Fighter II',
      'Half Life',
      'Final Fantasy VII',
      'Star Fox',
      'Tetris',
      'Donkey Kong III',
      'GoldenEye 007',
      'Doom',
      'Fallout',
      'GTA',
      'Halo'
    ];
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
