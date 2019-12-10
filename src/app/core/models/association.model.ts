export class AssociationModel {
  _id?: string;
  nom: string;
  imageAssociation: File | string;
  email: string;
  username: string;
  password: string;
  type?: string;
  ville: string;
  adresse: string;
  codePostale: string;
  tel: string;
  annonces?: [];
  benevoles?: [];
  evenements?: [];
  dons?: [];
  __v?: any;
  createdAt?: Date;
  updatedAt?: Date;
}
