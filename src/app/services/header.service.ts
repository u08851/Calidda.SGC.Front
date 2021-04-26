import { Injectable, EventEmitter } from '@angular/core';

@Injectable()

export class headerService {

	sidenav$ = new EventEmitter<boolean>();
    userId$ = new EventEmitter<number>();

	public sidenav: boolean = true;

	public setSidenav() {
		this.toggle();
	}
	
	public toggle() {
		this.sidenav$.emit(
			this.sidenav =!  this.sidenav
		)
	}
	
	setUser(userId) {
		this.userId$.emit(userId);
	}
	
}