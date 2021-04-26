import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class LoginServices {

  private BaseController = "Persona"
  private BASE_URL = environment.apiComiteUrl + this.BaseController;

  constructor(
    private _http:HttpClient,
  )
  {

  }

  getLogin(model: LoginModel) {
    return this._http.post(`${this.BASE_URL}/Acceder`, model);
  }




}
