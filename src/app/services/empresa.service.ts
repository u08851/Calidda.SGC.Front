import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmpresaModel } from '../models/empresa.model';


@Injectable({
  providedIn: 'root'
})
export class EmpresaServices {

  private BaseController = "Empresa"
  private BASE_URL = environment.apiComiteUrl + this.BaseController;

  constructor(
    private _http:HttpClient,
  )
  {

  }

  getListEmpresa(term:string,page:number,size:number){
    return this._http.get<EmpresaModel>(`${this.BASE_URL}/searchAll/${term}/${page}/${size}`);
  }

  addEmpresa(model: EmpresaModel) {
    return this._http.post(`${this.BASE_URL}/Create`, model);
  }

  updateEmpresa(model: EmpresaModel) {
    return this._http.put(`${this.BASE_URL}/Update`, model);
  }

}
