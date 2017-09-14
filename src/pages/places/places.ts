import { PlaceService } from '../../services/place.service';
import { PlaceModel } from '../../models/place.model';
import { PlacePage } from '../place/place';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPlacePage } from "../add-place/add-place";

@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage implements OnInit {

  public addPlacePage: AddPlacePage;

  public places: PlaceModel[] = [];
  constructor(public navCtrl: NavController,
    public placeService: PlaceService) { }

  public ionViewWillEnter(): void {
    this.onRefresh();
  }

  public openPlace(place: PlaceModel) {
    this.navCtrl.push(PlacePage, { place: place });
  }

  public onRefresh() {
    this.places = this.placeService.loadPlaces();
  }

  public goToAddPlace() {
    this.navCtrl.push(AddPlacePage);
  }

  public ngOnInit(): void {
    this.placeService.fetchPlaces().then((places: PlaceModel[]) => {
      this.places = places ? places : [];
      this.placeService.places = this.places;
    });
  }
}
