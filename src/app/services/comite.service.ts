import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  updateComite(model: ComiteRequestModel) {
    return this._http.put(`${this.BASE_URL2}/Update`, model);
  }

  getListComite(type:number,term1:string,term2:string,term3:string,term4:string){
    if(type == 0){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=0&termD=${term1}&termH=${term2}`);
    }
    if(type == 1){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=1&termD=${term1}&termH=${term2}&termN=${term3}`);
    }
    if(type == 2){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=2&termD=${term1}&termH=${term2}&termN=${term3}&termW=${term4}`);
    }
    if(type == 3){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=3&termD=${term1}&termH=${term2}&termN=${term3}`);
    }
    if(type == 4){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=4&termD=${term1}&termH=${term2}`);
    }
  }

  getListComiteActive(type:number,term1:string,term2:string,term3:string,term4:string,page:number,size:number){
    return this._http.get<any>(`${this.BASE_URL}/InicioFiltro?type=${type}&termD=${term1}&termH=${term2}&termN=${term3}&termW=${term4}&page=${page}&size=${size}`);
  }

  getListComitexFiltros(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL2}/ListComitesxFiltros?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }

  darBajaComite(model: ComiteRequestModel) {
    return this._http.put(`${this.BASE_URL2}/DarBaja`, model);
  }

  exportarExcelTotalComiteActivos(fechaDesde: string,fechaHasta: string){
    const url = `${this.BASE_URL}/ExcelTotalComiteActivos/`+fechaDesde+"/"+fechaHasta;
    let headers = new HttpHeaders();
    headers = headers.append("Accept","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    return this._http.post(url,null,{headers: headers,responseType: 'blob'})
  }


}
