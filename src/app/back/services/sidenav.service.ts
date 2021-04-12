import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class SidenavService {

	sidenav$ = new EventEmitter<boolean>();

	public sidenav: boolean = true;

	public setSidenav() {
		this.toggle();
	}
	
	public toggle() {
		this.sidenav$.emit(
			this.sidenav =!  this.sidenav
		)
	}
	
}