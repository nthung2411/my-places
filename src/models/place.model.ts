import { LocationModel } from './location.model';
export class PlaceModel {
    constructor(public title: string,
        public description: string,
        public location: LocationModel) { }
}