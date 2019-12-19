import {AssociationModel} from './association.model';

export class EvenementModel {
  _id?: string;
  titre: string;
  ville: string;
  adresse: string;
  date: Date | String;
  association?: AssociationModel;
}
