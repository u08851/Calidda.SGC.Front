import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DireccionModel } from '../models/direccion.model';


@Injectable({
  providedIn: 'root'
})
export class DirectionServices {

  private BaseController = "Direccion"
  private BASE_URL = "http://localhost:52511/api/" + this.BaseController;

  constructor(
    private _http:HttpClient,
  )
  {

  }

  getListDirection(term:string,page:number,size:number){
    return this._http.get<DireccionModel>(`${this.BASE_URL}/searchAll/${term}/${page}/${size}`);
  }

  addDirection(model: DireccionModel) {
    return this._http.post(`${this.BASE_URL}/Create`, model);
  }

  updateDirection(model: DireccionModel) {
    return this._http.put(`${this.BASE_URL}/Update`, model);
  }

}
