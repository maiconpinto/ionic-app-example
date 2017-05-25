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

import { CardsPage } from '../pages/cards/cards';
import { CardsBasicPage } from '../pages/cards-basic/cards-basic';
import { CardsHeaderPage } from '../pages/cards-header/cards-header';
import { CardsListsPage } from '../pages/cards-lists/cards-lists';
import { CardsImagesPage } from '../pages/cards-images/cards-images';
import { CardsBackgroundsPage } from '../pages/cards-backgrounds/cards-backgrounds';
import { CardsSocialPage } from '../pages/cards-social/cards-social';
import { CardsMapPage } from '../pages/cards-map/cards-map';

import { CheckboxPage } from '../pages/checkbox/checkbox';

import { DatetimePage } from '../pages/datetime/datetime';

import { FabsPage } from '../pages/fabs/fabs';

import { GesturesPage } from '../pages/gestures/gestures';

import { GridPage } from '../pages/grid/grid';

import { IconsPage } from '../pages/icons/icons';

import { InputsPage } from '../pages/inputs/inputs';
import { InputsFixedInlineLabelsPage } from '../pages/inputs-fixed-inline-labels/inputs-fixed-inline-labels';
import { InputsFloatingLabelsPage } from '../pages/inputs-floating-labels/inputs-floating-labels';
import { InputsInlineLabelsPage } from '../pages/inputs-inline-labels/inputs-inline-labels';
import { InputsInsetLabelsPage } from '../pages/inputs-inset-labels/inputs-inset-labels';
import { InputsPlaceholderLabelsPage } from '../pages/inputs-placeholder-labels/inputs-placeholder-labels';

import { SearchbarPage } from '../pages/searchbar/searchbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetsPage,
    AlertPage,
    BadgesPage,
    ButtonsPage,
    ButtonsColorsPage,ButtonsOutlinePage,ButtonsClearPage,ButtonsRoundPage,ButtonsBlockPage,ButtonsFullPage,ButtonsSizesPage,ButtonsIconsPage,ButtonsComponentsPage,
    CardsPage,
    CardsBasicPage, CardsHeaderPage, CardsListsPage, CardsImagesPage, CardsBackgroundsPage, CardsSocialPage, CardsMapPage,
    CheckboxPage,
    DatetimePage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    InputsFixedInlineLabelsPage, InputsFloatingLabelsPage, InputsInlineLabelsPage, InputsInsetLabelsPage, InputsPlaceholderLabelsPage,
    SearchbarPage
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
    ButtonsColorsPage,ButtonsOutlinePage,ButtonsClearPage,ButtonsRoundPage,ButtonsBlockPage,ButtonsFullPage,ButtonsSizesPage,ButtonsIconsPage,ButtonsComponentsPage,
    CardsPage,
    CardsBasicPage, CardsHeaderPage, CardsListsPage, CardsImagesPage, CardsBackgroundsPage, CardsSocialPage, CardsMapPage,
    CheckboxPage,
    DatetimePage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    InputsFixedInlineLabelsPage, InputsFloatingLabelsPage, InputsInlineLabelsPage, InputsInsetLabelsPage, InputsPlaceholderLabelsPage,
    SearchbarPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
