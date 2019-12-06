export class UserModel {
  data: {
    token: string,
    user: {
      _id: string;
      nom: string;
      prenom?: string;
      email: string;
      username: string;
      password: string;
      type: string;
      ville?: string;
      adresse?: string;
      codePostale?: number;
      tel?: number;
    }
  };
  status: string;

  constructor() {}
}
