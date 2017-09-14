import { LocationModel } from '../../models/location.model';
import { PlaceModel } from '../../models/place.model';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage implements OnInit {
  public location: LocationModel;
  public place: PlaceModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  public ngOnInit(): void {
    this.place = this.navParams.get('place') as PlaceModel;
    this.location = this.place.location;
  }
}
