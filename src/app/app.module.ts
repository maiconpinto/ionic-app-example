import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets';
import { AlertPage } from '../pages/alert/alert';
import { BadgesPage } from '../pages/badges/badges';
import { ButtonsPage } from '../pages/buttons/buttons';

import { ButtonsColorsPage } from '../pages/buttons-colors/buttons-colors';
import { ButtonsOutlinePage } from '../pages/buttons-outline/buttons-outline';
import { ButtonsClearPage } from '../pages/buttons-clear/buttons-clear';
import { ButtonsRoundPage } from '../pages/buttons-round/buttons-round';
import { ButtonsBlockPage } from '../pages/buttons-block/buttons-block';
import { ButtonsFullPage } from '../pages/buttons-full/buttons-full';
import { ButtonsSizesPage } from '../pages/buttons-sizes/buttons-sizes';
import { ButtonsIconsPage } from '../pages/buttons-icons/buttons-icons';
import { ButtonsComponentsPage } from '../pages/buttons-components/buttons-components';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetsPage,
    AlertPage,
    BadgesPage,
    ButtonsPage,
    ButtonsColorsPage,ButtonsOutlinePage,ButtonsClearPage,ButtonsRoundPage,ButtonsBlockPage,ButtonsFullPage,ButtonsSizesPage,ButtonsIconsPage,ButtonsComponentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheetsPage,
    AlertPage,
    BadgesPage,
    ButtonsPage,
    ButtonsColorsPage,ButtonsOutlinePage,ButtonsClearPage,ButtonsRoundPage,ButtonsBlockPage,ButtonsFullPage,ButtonsSizesPage,ButtonsIconsPage,ButtonsComponentsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
