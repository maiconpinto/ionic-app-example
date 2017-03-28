import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html'
})
export class GesturesPage {

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  pressEvent(e) {
    this.press++
  }

  panEvent(e) {
    this.pan++
  }

  swipeEvent(e) {
    this.swipe++
  }

  tapEvent(e) {
    this.tap++
  }

}
