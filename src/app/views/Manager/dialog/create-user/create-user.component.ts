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
  
  constructor(private confirmationService: ConfirmationService) {}
  
  ngOnInit(): void {

    this.countries = [
      {name: 'PERÚ', code: 'PE'},
    ];

  }
    showModalDialog() {
      this.displayModal = true;
    } 
}
