export class UserModel {

  usuarioId: number;
  login: string;
  password: string;
  imagen: string;
  ad: string;
  correo: string;
  count: number;
  estado: number;
  fechaCreacion: string;
  usuarioCreacion: number;
  fechaModificacion: string;
  usuarioModificacion: number;
  personaId: number;
  empresaNombre: string;
  personaDto: PersonModel[];

}

export class PersonModel{

  personaId: number;
  nombre: string;
  apePaterno: string;
  apeMaterno: string;
  empresaId: number;

}
