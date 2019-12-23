import {AssociationModel} from './association.model';
import {BenevoleModel} from './benevole.model';

export class EvenementModel {
  _id?: string;
  titre: string;
  sujet: string;
  ville: string;
  adresse: string;
  date: Date | String;
  association?: AssociationModel;
  benevoles?: BenevoleModel;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  _v?: Date | number;
}
