import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RolModel } from '../models/rol.model';


@Injectable({
  providedIn: 'root'
})
export class RolServices {

  private BaseController = "Rol"
  private BASE_URL = environment.apiComiteUrl + this.BaseController;

  constructor(
    private _http:HttpClient,
  )
  {

  }

  getListRol(){
    return this._http.get<RolModel>(`${this.BASE_URL}/listarRol`);
  }

}
