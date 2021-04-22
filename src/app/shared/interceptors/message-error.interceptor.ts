import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { AppConstants } from '../constants/app.constants';

@Injectable()
export class MessageErrorInterceptor implements HttpInterceptor {

    constructor(
        public _router: Router,
        private messageService: MessageService,
    ) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler

    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse && event.ok) {
                        if (event.body.valid !== undefined && !event.body.valid) {
                            if (event.body.message != null && event.body.message != undefined) {
                                /*
                                    swal.fire({
                                        title:event.body.message,
                                        toast: true,
                                        position: 'top-end',
                                        showConfirmButton: false,
                                        timer: 5000
                                    });*/
                                    this.messageService.add(
                                        {
                                            severity:'error',
                                            summary: AppConstants.TitleModal.Error,
                                            detail: event.body.message}
                                        );
                                    /*const dialogRefConfirm = this._dialog.open(PopupConfirmComponent, {
                                        data: this.errorPopup,
                                        autoFocus: false
                                      })      */                      
                            }
                            else {
                                this.messageService.add(
                                    {
                                        severity:'error',
                                        summary: AppConstants.TitleModal.Error,
                                        detail: AppConstants.MessageModal.SERVICES_ERROR}
                                    );
                                /*const dialogRefConfirm = this._dialog.open(PopupConfirmComponent, {
                                    data: this.errorPopup,
                                    autoFocus: false
                                  })*/

                                /*
                                swal.fire({
                                    title: "Ha ocurrido un error inesperado.",
                                    icon: 'error',
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 5000
                                });*/

                            }
                            
                        }
                    }
                },
                // Operation failed; error is an HttpErrorResponse
                (error: HttpErrorResponse) => { }
            )
        );
    }
}
