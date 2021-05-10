import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-commitment',
  templateUrl: './detail-commitment.component.html',
  styleUrls: ['./detail-commitment.component.scss']
})
export class DetailCommitmentComponent implements OnInit {
  
  activeIndex: number;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params;
    
    this.route.params.subscribe(params => {
      this.activeIndex = params['index']
    })

  }

  
  
}