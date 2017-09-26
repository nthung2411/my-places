import { PlaceService } from '../../services/place.service';
import { LocationModel } from '../../models/location.model';
import { PlaceModel } from '../../models/place.model';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavParams, ToastController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage implements OnInit {
  public location: LocationModel;
  public place: PlaceModel;
  private index: number;

  constructor(private viewCtrl: ViewController,
    private navParams: NavParams,
    private placeService: PlaceService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { }

  public ngOnInit(): void {
    this.place = this.navParams.get('place') as PlaceModel;
    this.index = this.navParams.get('index') as number;

    this.location = this.place.location;
  }

  public removePlace() {
    const loader = this.loadingCtrl.create({
      content: 'Removing...'
    });
    loader.present();

    const place = this.placeService.loadPlaces()[this.index];
    this.placeService.deletePlace(this.index).then(data => {
      const toast = this.toastCtrl.create({
        message: 'Success !',
        duration: 2500
      });
      toast.present();

      this.viewCtrl.dismiss();
      loader.dismiss();
    }).catch(error => {
      const toast = this.toastCtrl.create({
        message: 'Could not remove' + error.message,
        duration: 2500
      });
      toast.present();
      loader.dismiss();

      this.placeService.addPlace(place.title, place.description, place.location);
    });
  }
}
