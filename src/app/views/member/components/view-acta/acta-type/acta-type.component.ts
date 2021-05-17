import { Component, Input, OnInit } from '@angular/core';
import { actaType, ActaTypeService } from '../../../../../services/acta-type.service';

@Component({
  selector: 'app-acta-type',
  templateUrl: './acta-type.component.html',
  styleUrls: ['./acta-type.component.scss']
})
export class ActaTypeComponent implements OnInit {
  @Input() public typActa:actaType;
  cols:any[] = [];
  
  constructor(
    private _actaTypeService : ActaTypeService) { 
  }

  ngOnInit(): void {
    this.cols = this._actaTypeService.ActaColumns.find( x => x.id === this.typActa.id).col;
  }
}
