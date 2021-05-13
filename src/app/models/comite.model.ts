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
  frecuenciaId?:number;
  fechaHora?:Date;
  fechaHoraUltima?:Date;
}


export class ComiteCrudModel{

  comiteId: number;
  fechaCreacion: string;
  horaCreacion: string;
  fechaHora?:Date;
  fechaHoraUltima?:Date;
  codigo: string;
  nombre: string;
  direccionId:number;
  direccion:string;
  responsableId: number;
  responsable: string;
  empresaId: number;
  empresa:string;
  frecuenciaId: number;
  frecuencia: string;
  paisId: number;
  pais: string;
  url: string;
  count: number;
}

