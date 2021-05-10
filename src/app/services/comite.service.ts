import { HttpClient } from '@angular/common/http';
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

  private BaseController1 = "SubInicio"
  private BASE_URL1 = environment.apiComiteUrl + this.BaseController1;

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
  
  getListComite(type:number,term1:string,term2:string,term3:string,term4:string){
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
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=3&termD=${term1}&termH=${term2}`);
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
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=7&termD=${term1}&termH=${term2}&termN=${term3}`);
    }
    if(type == 8){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=8`);
    }
    if(type == 9){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=9&termN=${term3}`);
    }
    if(type == 10){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=10&termD=${term1}`);
    }
    if(type == 11){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=11&termH=${term2}`);
    }
    if(type == 12){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=12&termD=${term1}&termH=${term2}`);
    }
    if(type == 13){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=13&termD=${term1}&termN=${term3}`);
    }
    if(type == 14){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=14&termH=${term2}&termN=${term3}`);
    }
    if(type == 15){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=15&termD=${term1}&termH=${term2}&termN=${term3}`);
    }
    if(type == 16){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=16`);
    }
    if(type == 17){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=17&termD=${term1}`);
    }
    if(type == 18){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=18&termH=${term2}`);
    }
    if(type == 19){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=19&termD=${term1}&termH=${term2}`);
    }
    if(type == 20){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=20`);
    }
    if(type == 21){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=21&termD=${term1}`);
    }
    if(type == 22){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=22&termH=${term2}`);
    }
    if(type == 23){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=23&termN=${term3}`);
    }
    if(type == 24){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=24&termW=${term4}`);
    }
    if(type == 25){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=25&termD=${term1}&termH=${term2}`);
    }
    if(type == 26){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=26&termD=${term1}&termN=${term3}`);
    }
    if(type == 27){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=27&termD=${term1}&termW=${term4}`);
    }
    if(type == 28){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=28&termH=${term2}&termN=${term3}`);
    }
    if(type == 29){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=29&termH=${term2}&termW=${term4}`);
    }
    if(type == 30){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=30&termN=${term3}&termW=${term4}`);
    }
    if(type == 31){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=31&termD=${term1}&termN=${term3}&termW=${term4}`);
    }
    if(type == 32){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=32&termH=${term2}&termN=${term3}&termW=${term4}`);
    }
    if(type == 33){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=33&termD=${term1}&termH=${term2}&termW=${term4}`);
    }
    if(type == 34){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=34&termD=${term1}&termH=${term2}&termN=${term3}`);
    }
    if(type == 35){
      return this._http.get<any>(`${this.BASE_URL}/Inicio?type=35&termD=${term1}&termH=${term2}&termN=${term3}&termW=${term4}`);
    }
  }

  getListComiteActive(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL1}/SubInicio?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }

  getListComiteActivePais(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL1}/SubInicioPais?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }

  getListComiteActiveEmpresa(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL1}/SubInicioEmpresa?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }

  getListComiteActiveSecretaria(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL1}/SubInicioSecreataria?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }

  getListComiteActiveFrecuencia(term:string,term1:string,term2:string,page:number,size:number){
    return this._http.get<ComiteActiveModel>(`${this.BASE_URL1}/SubInicioFrecuencia?termN=${term}&termD=${term1}&termH=${term2}&page=${page}&size=${size}`);
  }

}
