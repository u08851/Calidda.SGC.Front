import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComiteActiveModel } from '../models/comite.model';
import { ComiteRequestModel } from '../models/comite.model';


@Injectable({
  providedIn: 'root'
})
export class ComiteServices {

  private BaseController = "Inicio"
  private BASE_URL = environment.apiComiteUrl + this.BaseController;

  private BaseController1 = "SubInicio"
  private BASE_URL1 = environment.apiComiteUrl + this.BaseController1;

  private BaseController2 = "Comite"
  private BASE_URL2 = environment.apiComiteUrl + this.BaseController2;

  constructor(
    private _http:HttpClient,
  )
  {

  }

  addComite(model: ComiteRequestModel) {
    return this._http.post(`${this.BASE_URL2}/Create`, model);
  }

  getListComite(type:number,term1:string,term2:string,term3:string,term4:string){
    if(type == 0){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=0&termD=${term1}&termH=${term2}`);
    }
    if(type == 1){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=1&termD=${term1}&termH=${term2}&termN=${term3}`);
    }
  }

  getListComiteActive(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL1}/SubInicio?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }

  getListComiteActivePais(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL1}/SubInicioPais?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }

  getListComiteActiveEmpresa(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL1}/SubInicioEmpresa?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }

  getListComiteActiveSecretaria(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL1}/SubInicioSecreataria?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }

  getListComiteActiveFrecuencia(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL1}/SubInicioFrecuencia?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }


  getListComitexFiltros(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL2}/ListComitesxFiltros?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }


}
