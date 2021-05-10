import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaisModel } from '../models/pais.model';
import { UserModel, UserRequestModel } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserServices {

  private BaseController = "Persona"
  private BASE_URL = environment.apiComiteUrl + this.BaseController;

  constructor(
    private _http:HttpClient,
  )
  {

  }

  getListUser(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<UserModel>(`${this.BASE_URL}/searchAll/${term}/${term1}/${term2}/${page}/${size}`);
  }

  addUser(model:UserRequestModel){
    return this._http.post(`${this.BASE_URL}/Create`, model);
  }

  editUser(model:UserRequestModel){
    return this._http.put(`${this.BASE_URL}/Update`, model);
  }

  getUsuariosByEmpresa(idEmpresa: number) {
    return this._http.get(`${this.BASE_URL}/getUsuariosByEmpresa/${idEmpresa}`);
  }

}
