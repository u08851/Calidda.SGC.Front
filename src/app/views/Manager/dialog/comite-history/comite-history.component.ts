import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HistoricoComiteModel } from 'src/app/models/historicocomite.model';
import { HistoricoComiteServices } from 'src/app/services/historicocomite.service';

@Component({
  selector: 'app-comite-history',
  templateUrl: './comite-history.component.html',
  styleUrls: ['./comite-history.component.scss']
})
export class ComiteHistoryComponent implements OnInit {

  data2: any[];

  listaHistoricoComites: HistoricoComiteModel[];
  historicoComite=new HistoricoComiteModel();

  constructor(
    public config: DynamicDialogConfig,
    private historicoComiteServices:HistoricoComiteServices

  ) { }

  ngOnInit(): void {

    if(this.config.data == null){
      this.listaHistoricoComites=[];
    }
    else{
      this.getListHistoricoComitebyComite(this.config.data);
    }
  }

  getListHistoricoComitebyComite(data) {


    console.log(this.historicoComite);
    this.historicoComite.comiteId=data.comiteId;

    console.log(this.historicoComite);

    this.historicoComiteServices.getListHistoricoComiteByComite(this.historicoComite.comiteId).subscribe(
      (result: any) => {

        this.listaHistoricoComites = result.data
      }
    )

  }


}
