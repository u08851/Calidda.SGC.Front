import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  products: any[] = [
    {
      reuniones: 'reuniones',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      asistencia: 'asistencia',
      agenda: 'agenda',
      acta: 'acta'
    },
    {
      reuniones: 'reuniones',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      asistencia: 'asistencia',
      agenda: 'agenda',
      acta: 'acta'
    },
    {
      reuniones: 'reuniones',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      asistencia: 'asistencia',
      agenda: 'agenda',
      acta: 'acta'
    }
  ];

  cols: any[];
  responsiveOptions;

  constructor() { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 1,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 1,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

  ngOnInit(): void {

    this.cols = [
      { header: 'Reuniones', field: 'reuniones' },
      { header: 'Fecha de la reunión', field: 'fechaReunion' },
      { header: 'Hora de la reunión', field: 'horaReunion' },
      { header: 'Asistencia de Miembros', field: 'asistencia' },
      { header: 'Agenda de la Reunión', field: 'agenda' },
      { header: 'Acta', field: 'acta' }
    ];

  }

}
