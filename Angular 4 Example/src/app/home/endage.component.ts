import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'input-age-end',
  template: `<input type="text" class="age cyan-text" (keyup)="getVal($event)" [(ngModel)]="endAge" (ngModelChange)="changeEndAge($event)"/>`
})
export class AppEndAgeComponent { 
	@Output() changeParentEndAge: EventEmitter<number> = new EventEmitter<number>(); 
	endAge=50
	getVal( event : any ){
		this.endAge = event.target.value;
	}
	changeEndAge( event : any ){
		//document.getElementById('show-end-age').innerText = this.endAge;
		this.changeParentEndAge.emit(this.endAge);
	}
}