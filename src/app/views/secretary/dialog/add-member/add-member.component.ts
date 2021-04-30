import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  selectedEmail: string;
  emails: any[];
  selectedCEmpresa: string;
  cargos: any[];
  selectedCComite: string;
  cargoComite: any[];
  selectedTipoMember: string;
  members: any[];
  status: any[];
  selectedStatus: string;
  countries: any[];
  selectedCountry: string;


  constructor() { }

  ngOnInit(): void {
    this.emails = [
      { name: 'manuel@gamail.com', code: 'M' }
    ]

    this.countries = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

}