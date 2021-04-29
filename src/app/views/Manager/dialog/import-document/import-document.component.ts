import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfidencialDocumentoRequest } from 'src/app/models/confidoc.model';
import { ConfidencialDocumentoServices } from 'src/app/services/confidoc.service';
import { AppConstants } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-import-document',
  templateUrl: './import-document.component.html',
  styleUrls: ['./import-document.component.scss']
})
export class ImportDocumentComponent implements OnInit {

  uploadedFiles: any[] = [];
  checked:boolean;
  submitted: boolean = false;
  documentForm:FormGroup;
  imag64:string="";
  tipoSelect:number = 1;
  
  constructor(
    private fb :FormBuilder,
    private confidencialDocumentoServices:ConfidencialDocumentoServices,
    public messageService:MessageService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    ) {
   }

  ngOnInit(): void {
    this.crearFormulario();
  }

  toBase64 = (file: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

  uploadDocument(event) {
    this.toBase64(event.currentFiles[0]).then(
      dataImg => {
        this.imag64 = dataImg.toString();
      }
    );
  }

  crearFormulario(){
    this.documentForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1)]],
      statusId: [false, ],
    });
  }

  get g() { return this.documentForm.controls; }

  showWarn(mensaje :string) {
    this.messageService.add({severity:'warn', summary: AppConstants.TitleModal.Warning, detail: mensaje});
  }

  showSuccess(mensaje :string) {
    this.messageService.add({severity:'success', summary: AppConstants.TitleModal.Success, detail: mensaje});
  }

  send(){
    this.submitted = true;

    if (this.documentForm.valid) {

      if (!this.documentForm.controls.nombre.valid) {
        this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
        return false;
      }

      if(this.imag64.length < 1){
        this.showWarn(AppConstants.MessageModal.FIELD_IMPORT_ERROR);
        return false;
      }

      let data = this.documentForm.value;
      var odata = new ConfidencialDocumentoRequest();
      odata.documentoId = 0;
      odata.estado = data.statusId == true ? 1 : 0;
      odata.fechaMdificacion = "2021-04-29T01:18:53.396Z";
      odata.fechaRegistro = "2021-04-29T01:18:53.396Z";
      odata.imagen64 = this.imag64.replace("data:application/pdf;base64,","");
      odata.nombre = data.nombre+".pdf";
      odata.tipo = this.tipoSelect;
      odata.userId = 1;
      odata.userIdModified = null;
      
      this.confidencialDocumentoServices.addConfidencialDocumento(odata).subscribe(
        (response: any) => {
          this.showSuccess(AppConstants.MessageModal.CREATE_SUCCESS);
          this.ref.close(true);
        }
      )

    }else{
      this.documentForm.markAllAsTouched();
      this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
    }

  }

  change(id){
    this.tipoSelect = id;
  }

}
