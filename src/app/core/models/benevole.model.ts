export class BenevoleModel {
  _id?: string;
  nom: string;
  prenom: string;
  email: string;
  username: string;
  password: string;
  type?: string;
  ville: string;
  sexe: string;
  adresse: string;
  codePostale: string;
  tel: string;
  annonces?: [];
  associations?: [];
  benevoles?: [];
  evenements?: [];
  dons?: [];
  __v?: any;
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
}
