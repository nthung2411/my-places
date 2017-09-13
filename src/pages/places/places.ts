import { LocationModel } from '../../models/location.model';
import { PlaceModel } from '../../models/place.model';
import { AddPlacePage } from '../add-place/add-place';
import { PlacePage } from '../place/place';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage implements OnInit {
  public addPlacePage: AddPlacePage;

  public places: PlaceModel[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public ngOnInit(): void {
    this.places = [
      new PlaceModel('My Home', '', new LocationModel(10.8231, 106.6297)),
      new PlaceModel('My Work', '', new LocationModel(10.8231, 106.6297))
    ];
  }

  public openPlace(place: PlaceModel) {
    this.navCtrl.push(PlacePage, { place: place });
  }
}
