import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { LocationModel } from '../models/location.model';
import { PlaceModel } from '../models/place.model';

@Injectable()
export class PlaceService {
    private places: PlaceModel[] = [
        new PlaceModel('A', 'A', new LocationModel(106, 10))
    ];

    constructor(private storage: Storage) { }

    public addPlace(title: string, description: string, location: LocationModel): Promise<any> {
        const place = new PlaceModel(title, description, location);
        this.places.push(place);

        return this.storage.set('places', this.places);
    }

    public setPlaces(places: PlaceModel[]) {
        this.places = places;
    }

    public loadPlaces() {
        return this.places.slice();
    }

    public fetchPlaces(): Promise<any> {
        return this.storage.get('places');
    }

    public deletePlace(index: number): Promise<any> {
        this.places.splice(index, 1);

        return this.storage.set('places', this.places);
    }
}
