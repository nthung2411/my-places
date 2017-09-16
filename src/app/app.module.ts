import { PlaceService } from '../services/place.service';
import { SetLocationPage } from '../pages/set-location/set-location';
import { AddPlacePage } from '../pages/add-place/add-place';
import { PlacePage } from '../pages/place/place';
import { PlacesPage } from '../pages/places/places';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { AgmCoreModule } from '@agm/core';
import { MyApp } from './app.component';
import { IonicStorageModule } from "@ionic/storage";

const pages = [
  MyApp,
  PlacesPage,
  PlacePage,
  AddPlacePage,
  SetLocationPage
];

@NgModule({
  declarations: pages,
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHPKxfbPSHURl-SVRy-nFbqj7LoU1pLDE'
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: pages,
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,

    PlaceService,

    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
