import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DireccionModel } from '../models/direccion.model';


@Injectable({
  providedIn: 'root'
})
export class DirectionServices {

  private BaseController = "Direccion"
  private BASE_URL = environment.apiComiteUrl + this.BaseController;

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
