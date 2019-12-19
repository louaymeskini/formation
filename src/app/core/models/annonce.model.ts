import {AssociationModel} from './association.model';

export class AnnonceModel {
  _id?: string;
titre: string;
sujet: string;
pieceJointe: File | string;
association?: string | AssociationModel;
}
