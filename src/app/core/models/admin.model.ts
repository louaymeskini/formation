export class AdminModel {
  _id?: string;
  nom: string;
  prenom: string;
  email: string;
  username: string;
  password: string;
  newPassword?: string;
  confirmPassword?: string;
  type?: string;
  __v?: any;
  createdAt?: Date;
  updatedAt?: Date;
}
