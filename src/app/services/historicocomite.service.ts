import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HistoricoComiteModel } from '../models/historicocomite.model';


@Injectable({
  providedIn: 'root'
})
export class HistoricoComiteServices {

  private BaseController = "HistoricoComite"
  private BASE_URL = environment.apiComiteUrl + this.BaseController;

  constructor(
    private _http:HttpClient,
  )
  {
  }

  getListHistoricoComiteByComite(comiteId: number){
    return this._http.get<HistoricoComiteModel>(`${this.BASE_URL}/ListarHistoricoComiteByComite/${comiteId}`);
  }

  addHistoricoComite(model: HistoricoComiteModel) {
    return this._http.post(`${this.BASE_URL}/Create`, model);
  }

}
