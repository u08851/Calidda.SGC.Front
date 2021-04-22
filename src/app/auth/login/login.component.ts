import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginModel } from 'src/app/models/login.model';
import { LoginServices } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {
  value3: string;

  loginForm:FormGroup;
  submitted: boolean = false;
  constructor(private messageService: MessageService,
    private fb :FormBuilder,
    private loginServices:LoginServices,
    public router:Router) {}

  ngOnInit(): void {

    this.crearFormulario();
  }

  get g() { return this.loginForm.controls; }

  crearFormulario()
  {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  showResponse(event) {
    this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
  }

  showWarn(mensaje :string) {
    this.messageService.add({severity:'warn', summary: 'Advertencia', detail: mensaje});
  }

  showSuccess(mensaje :string) {
    this.messageService.add({severity:'success', summary: 'Bienvenido', detail: mensaje});
  }

  send() {
    this.submitted = true;

    if (this.loginForm.valid) {
      if (!this.loginForm.controls.login.valid) {
        this.showWarn("Faltan datos por completar");
        return false;
      }
        //LOGIN
        let data = this.loginForm.value;
        var odata = new LoginModel();


        odata.login = data.login;
        odata.password = data.password ;
        odata.email  =  "";

        this.loginServices.getLogin(odata).subscribe(
          (response: any) => {
            this.router.navigate(['/manager']);
          }

        )
      }
      else {
        this.loginForm.markAllAsTouched();
        this.showWarn("Faltan datos por completar");
      }
    }
}
