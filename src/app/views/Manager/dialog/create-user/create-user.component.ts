import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  values:string;
  checked:boolean;
  displayModal:boolean;
  selectedCountry:string;
  countries:any[];

  dataRol: any[];
  selectedRol:string;
  dataEmpresa:any[];
  selectedEmpresa:string;
  
  constructor(private confirmationService: ConfirmationService) {}
  
  ngOnInit(): void {

    this.countries = [
      {name: 'PERÚ', code: 'PE'},
    ];
    this.dataRol = [
      {name: 'Admin', code: 'AD'}
    ];
    this.dataEmpresa = [
      {name: 'SGS', code: 'SGC'}
    ];

  }
    showModalDialog() {
      this.displayModal = true;
    } 
}
