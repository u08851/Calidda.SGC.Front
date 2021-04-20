import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaisModel } from '../models/pais.model';


@Injectable({
  providedIn: 'root'
})
export class PaisServices {

  private BaseController = "Pais"
  private BASE_URL = "http://localhost:52511/api/" + this.BaseController;

  constructor(
    private _http:HttpClient,
  )
  {

  }

  getListPais(){
    return this._http.get<PaisModel>(`${this.BASE_URL}/listarPais`);
  }

}
