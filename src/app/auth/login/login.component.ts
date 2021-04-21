import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
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
    private loginServices:LoginServices) {}

  ngOnInit(): void {

    this.crearFormulario();
  }

  get g() { return this.loginForm.controls; }

  crearFormulario()
  {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(1)]],
      passowrd: ['', [Validators.required, Validators.minLength(1)]],
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
      if (!this.loginForm.controls.nombre.valid) {
        this.showWarn("Faltan datos por completar");
        return false;
      }
        //LOGIN
        let data = this.loginForm.value;
        var odata = new LoginModel();
        odata.login = data.nombre;
        odata.password = "asdasd" ;
        odata.email  =  data.nombre;

        this.loginServices.getLogin(odata).subscribe(
          (response: any) => {
            this.showSuccess("Bienvenido al Sistema ...");
          }

        )
      }
      else {
        this.loginForm.markAllAsTouched();
        this.showWarn("Faltan datos por completar");
      }
    }
}
