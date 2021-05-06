import { Component, OnInit } from '@angular/core';

interface Demo {
  name: string;
  code: string;
}

interface Demo2 {
  name2: string;
  code2: string;
}

@Component({
  selector: 'app-crear-comite',
  templateUrl: './crear-comite.component.html',
  styleUrls: ['./crear-comite.component.scss'],
})
export class CrearComiteComponent implements OnInit {
  
  activeIndex: number = 0;
  empresa: Demo[];
  selectedDemo1: Demo;

  selectedCountry:string;
  countries:any[];
  displayModal: boolean;
  
  //responsable comite
  selectedResponsableComite:any;
  filteredResponsableComite: any[];
  responsableComite: any[];
  filteredResponsableComites:any[];

  //Dirección
  selectedDireccion:string;
  direccion:any[];

  constructor() {}

  ngOnInit(): void {
    this.empresa = [
      { name: 'Calidda', code: 'NY' },
      { name: 'Calidda 2', code: 'RM' },
      { name: 'Calidda 3', code: 'LDN' },
    ];

    this.countries = [
      {name: 'PERÚ', code: 'PE'},
    ];

    this.responsableComite = [
      { id: '01', name: 'Manuel' },
      { id: '01', name: 'Juan' },
    ]

    this.direccion = [
      {name: 'Av. Manchay portada III', code: '001'}
    ]
  }

  // dialog crear
  showModalDialog() {
    this.displayModal = true;
  }


  filtered(event) {
    
    let filtered : any[] = [];
    let query = event.query;
  
    for(let i = 0; i < this.responsableComite.length; i++) {
        let responsable = this.responsableComite[i];

        if (responsable.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(responsable);
        }
    }
    
    this.filteredResponsableComite = filtered;
}

}