import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginModel } from 'src/app/models/login.model';
import { LoginServices } from 'src/app/services/login.service';
import { AppConstants } from 'src/app/shared/constants/app.constants';

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
  constructor(
    private messageService: MessageService,
    private fb :FormBuilder,
    private loginServices:LoginServices,
    public router:Router
  ) {}

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
    this.messageService.add({severity:'info', summary:AppConstants.TitleModal.Success, detail: 'User Responded', sticky: true});
  }
  
  showWarn(mensaje :string) {
    this.messageService.add({severity:'warn', summary: AppConstants.TitleModal.Warning, detail: mensaje});
  }

  showSuccess(mensaje :string) {
    this.messageService.add({severity:'success', summary: AppConstants.TitleModal.Login, detail: mensaje});
  }

  send() {
    this.submitted = true;

    if (this.loginForm.valid) {
      if (!this.loginForm.controls.login.valid) {
        this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
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
            if(response.valid){
              this.router.navigate(['/manager']);
              this.showSuccess(AppConstants.MessageModal.LOGIN_SUCCESS);
            }
          }
        )
      }
      else {
        this.loginForm.markAllAsTouched();
        this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
      }
    }
}
