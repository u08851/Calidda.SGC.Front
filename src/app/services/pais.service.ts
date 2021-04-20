import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaisModel } from '../models/pais.model';


@Injectable({
  providedIn: 'root'
})
export class PaisServices {

  private BaseController = "Pais"
  private BASE_URL = environment.apiComiteUrl + this.BaseController;

  constructor(
    private _http:HttpClient,
  )
  {

  }

  getListPais(){
    return this._http.get<PaisModel>(`${this.BASE_URL}/listarPais`);
  }

}
