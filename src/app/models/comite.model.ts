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

  comiteId: number;
  empresaId:number;
  paisId:number;
  usuarioId:number;
  nombre: string;
  correo:string;
  direccionId:number;
  codigo: string;
  estado:number;
  frecuenciaId:number;



}


export class ComiteCrudModel{

  comiteId: number;
  fechaCreacion: string;
  horaCreacion: string;
  codigo: string;
  nombre: string;
  direccionId:number;
  direccion:string;
  responsable: string;
  empresa:string;
  frecuencia: string;
  pais: string;
  url: string;
  count: number;
}

