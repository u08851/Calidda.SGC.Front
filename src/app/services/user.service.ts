import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaisModel } from '../models/pais.model';
import { UserModel } from '../models/user.model';


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

  getListUser(term:string,page:number,size:number){
    return this._http.get<UserModel>(`${this.BASE_URL}/searchAll/${term}/${page}/${size}`);
  }

}
