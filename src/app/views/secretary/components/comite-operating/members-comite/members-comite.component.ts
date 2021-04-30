import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddMemberComponent } from '../../../dialog/add-member/add-member.component';

@Component({
  selector: 'app-members-comite',
  templateUrl: './members-comite.component.html',
  styleUrls: ['./members-comite.component.scss']
})
export class MembersComiteComponent implements OnInit {
 
  @Input() member: string;
  checked: boolean = false;
  secretary: boolean = false;
  products: any[] = [
    {
      "name": "fechac",
      "email": "Rosario@gmail.com",
      "comite": "name",
      "cel": "direccion",
      "status": "responsable",
      "facComite": "empresa"
    },
    {
      "name": "fechac",
      "email": "Rosario@gmail.com",
      "comite": "name",
      "cel": "direccion",
      "status": "responsable",
      "facComite": "empresa"
    },
  ];

  cols: any[];
  items: any[];

  constructor(
    public dialogService: DialogService,
    public  ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {

    this.cols = [
      { header: 'Nombres y apellidos', field: 'name' },
      { header: 'Correo electrónico', field: 'email' },
      { header: 'C. comité', field: 'comite' },
      { header: 'Celular', field: 'cel' },
      { header: 'Estado', field: 'status' },
      { header: 'Fac. en el comité', field: 'facComite' }
    ];



    this.items = [
      {
        label: 'Editar Comité',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Ver histórico',
        icon: 'pi pi-times',
      },
      {
        label: 'Dar de baja al Comité',
        icon: 'pi pi-times',
      },
      {
        label: 'Eliminar Comité',
        icon: 'pi pi-times',
      }
    ];

  }


  showAddMember() {
    this.ref = this.dialogService.open(AddMemberComponent, {
      header: 'Añadir miembro titular',
      width: '65%',
      contentStyle: { "max-height": "500px", "overflow": "inherit" },
      baseZIndex: 10000,
      data: null
    });
  }

  
  showEditMember() {
    this.ref = this.dialogService.open(AddMemberComponent, {
      header: 'Editar miembro del comité',
      width: '65%',
      contentStyle: { "max-height": "500px", "overflow": "inherit" },
      baseZIndex: 10000,
      data: null
    });
  }
}
