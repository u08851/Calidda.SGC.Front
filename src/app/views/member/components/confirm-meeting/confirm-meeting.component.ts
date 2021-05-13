import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-meeting',
  templateUrl: './confirm-meeting.component.html',
  styleUrls: ['./confirm-meeting.component.scss'],
})
export class ConfirmMeetingComponent implements OnInit {
  selectedCities: string[] = [];

  selectedCountry: string;
  countries: any[];

  constructor() {
    this.countries = [
      { name: 'Perú', code: 'PE' },
    ];
  }

  ngOnInit(): void {}
  
}
