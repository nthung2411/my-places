import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { LocationModel } from '../models/location.model';
import { PlaceModel } from '../models/place.model';

@Injectable()
export class PlaceService {
    public places: PlaceModel[] = [];

    constructor(private storage: Storage) { }

    public addPlace(title: string, description: string, location: LocationModel) {
        const place = new PlaceModel(title, description, location);
        this.places.push(place);
    }

    public loadPlaces() {
        return this.places.slice();
    }

    public fetchPlaces(): Promise<any> {
        return this.storage.get('places');
    }

    public setPlace(places: PlaceModel[]): Promise<any> {
        return this.storage.set('places', places);
    }

    public deletePlace(index: number) {
        this.places.splice(index, 1);
    }
}
