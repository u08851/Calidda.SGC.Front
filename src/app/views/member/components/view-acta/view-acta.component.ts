import { Component, OnInit } from '@angular/core';
import { ActaTypeService, actaType } from '../../../../services/acta-type.service'

@Component({
  selector: 'app-view-acta',
  templateUrl: './view-acta.component.html',
  styleUrls: ['./view-acta.component.scss']
})
export class ViewActaComponent implements OnInit {

  TypeActa:actaType[]=[];
  constructor(
    private _actaTypeService : ActaTypeService
  ) { 
    this.TypeActa = this._actaTypeService.ActaTypeArray;
  }

  ngOnInit(): void {
    
  }

}
