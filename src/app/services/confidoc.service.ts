import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConfidencialDocumentoRequest } from '../models/confidoc.model';


@Injectable({
  providedIn: 'root'
})
export class ConfidencialDocumentoServices {

  private BaseController = "ConfidencialDocumento"
  private BASE_URL = environment.apiComiteUrl + this.BaseController;

  constructor(
    private _http:HttpClient,
  )
  {

  }

  addConfidencialDocumento(model: ConfidencialDocumentoRequest) {
    return this._http.post(`${this.BASE_URL}/Create`, model);
  }

  updateConfidencialDocumento(model: ConfidencialDocumentoRequest) {
    return this._http.put(`${this.BASE_URL}/Update`, model);
  }

}
