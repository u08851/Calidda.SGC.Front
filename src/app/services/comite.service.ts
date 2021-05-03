import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ComiteServices {

  private BaseController = "Inicio"
  private BASE_URL = environment.apiComiteUrl + this.BaseController;

  constructor(
    private _http:HttpClient,
  )
  {

  }

  getListComite(type:number,term1:string,term2:string,term3:string){
    if(type == 0){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=0`);
    }
    if(type == 1){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=1&termD=${term1}`);
    }
    if(type == 2){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=2&termH=${term2}`);
    }
    if(type == 3){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=3&termH=${term1}&termH=${term2}`);
    }
    if(type == 4){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=4&termN=${term3}`);
    }
    if(type == 5){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=5&termD=${term1}&termN=${term3}`);
    }
    if(type == 6){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=6&termH=${term2}&termN=${term3}`);
    }
    if(type == 7){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=7&termH=${term1}&termH=${term2}&termN=${term3}`);
    }
  }

}
