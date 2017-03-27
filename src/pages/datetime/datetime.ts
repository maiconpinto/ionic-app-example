import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-datetime',
  templateUrl: 'datetime.html'
})
export class DatetimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
}
