import { Injectable } from '@angular/core';
import { LocationModel } from '../models/location.model';
import { PlaceModel } from '../models/place.model';

import { Storage } from '@ionic/storage';

@Injectable()
export class PlaceService {
    public places: PlaceModel[] = [];

    constructor(private storage: Storage) { }

    public addPlace(title: string, description: string, location: LocationModel) {
        const place = new PlaceModel(title, description, location);
        this.places.push(place);
        this.storage.set('places', this.places).then().catch(
            err => {
                this.places.splice(this.places.indexOf(place), 1);
            }
        );
    }

    public loadPlaces() {
        return this.places.slice();
    }

    public fetchPlaces(): Promise<any> {
        return this.storage.get('places');
    }

    public deletePlace(index: number) {
        this.places.splice(index, 1);
    }
}
