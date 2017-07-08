import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'input-age-start',
  template: `<input type="text" class="age cyan-text" (keyup)="getVal($event)" [(ngModel)]="startAge" (ngModelChange)="changeStartAge($event);"/>`
})
export class AppStartAgeComponent {
	@Output() changeParentStartAge: EventEmitter<number> = new EventEmitter<number>(); 
	startAge=20
	getVal( event : any ){
		this.startAge = event.target.value;
	}
	
	changeStartAge( event : any ){
		this.changeParentStartAge.emit(this.startAge);
		
	}
}