import { LocationModel } from '../../models/location.model';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-set-location',
  templateUrl: 'set-location.html',
})
export class SetLocationPage implements OnInit {
  public location: LocationModel;
  public marker: LocationModel;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  public ngOnInit(): void {
    this.location = this.navParams.get('location') as LocationModel;
    const locationIsSet = this.navParams.get('isSet') as boolean;
    if (locationIsSet) {
      this.marker = this.location;
    }
  }

  public onSetMarker(event: any) {
    this.marker = <LocationModel>{
      latitude: event.coords.lat,
      longitude: event.coords.lng
    };
  }

  public onCancel() {
    this.viewCtrl.dismiss();
  }

  public onConfirm() {
    this.viewCtrl.dismiss({
      location: this.marker
    });
  }
}
