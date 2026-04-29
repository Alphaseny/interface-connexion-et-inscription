export type ConnexionType = {
  formConnexion: {
    email: string;
    password: string;
  };
  handleSubmitConnexion: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeInputConnexion: (
    e: React.ChangeEvent<HTMLInputElement, Element>,
  ) => void;
};
export type InscriptionType = {
  formInscription: {
    prenom: string;
    nom: string;
    email: string;
    password: string;
    image: null | File;
  };
  handleSubmitInscription: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChangeInputInscription: (
    e: React.ChangeEvent<HTMLInputElement, Element>,
  ) => void;
};

export type SubmitPropsType = {
  onSuccess?: () => void;
  resetForm?: () => void;
};
