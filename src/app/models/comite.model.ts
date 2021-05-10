export class ComiteModel {
  nombre: string;
  count: number;
  code: string;
}

export class ComiteActiveModel{
  fechaC: string;
  nombre: string;
  secretaria: string;
  fechaU: string;
  pais: string;
  url: string;
  frecuencia: string;
  count: number;
}

export class ComiteRequestModel {

  comiteId: string;
  empresaId:number;
  paisId:number;
  usuarioId:number;
  nombre: string;
  correo:string;
  direccionId:number;
  codigo: string;
  estado:number;



}
