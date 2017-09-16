import { LocationModel } from '../../models/location.model';
import { Component } from '@angular/core';
import { LoadingController, ModalController, NavController, ToastController, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { SetLocationPage } from "../set-location/set-location";
import { NgForm } from "@angular/forms";
import { PlaceService } from "../../services/place.service";

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  public location = <LocationModel>{
    latitude: 10.8231,
    longitude: 106.6297
  };
  public locationIsSet = false;
  public currentLocation: LocationModel;
  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private geolocation: Geolocation,
    private placeService: PlaceService,
    private viewCtrl: ViewController) {
  }

  public onOpenMap() {
    const modal = this.modalCtrl.create(SetLocationPage,
      { location: this.location, isSet: this.locationIsSet });
    modal.present();
    modal.onDidDismiss((data) => {
      if (!data) { return; }
      this.locationIsSet = true;
      this.location = data.location;
    });
  }

  public onLocate() {
    const loader = this.loadingCtrl.create({
      content: 'Getting your location...'
    });
    loader.present();

    this.geolocation.getCurrentPosition().then(res => {
      this.location = res.coords;
      this.currentLocation = res.coords;

      this.locationIsSet = true;

      loader.dismiss();
    }).catch(error => {
      const toast = this.toastCtrl.create({
        message: 'Could not get location, please pick it manually!\n' + error.message,
        duration: 2500
      });
      toast.present();
      loader.dismiss();
    });
  }

  public onSubmit(form: NgForm) {
    this.placeService.addPlace(form.value.title, form.value.description, this.location);

    form.reset();

    this.location = <LocationModel>{
      latitude: 10.8231,
      longitude: 106.6297
    };
    this.locationIsSet = false;

    this.viewCtrl.dismiss();
  }
}
