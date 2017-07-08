import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'select3',
  template:`<select class="selectBox" [(ngModel)]="select3" (ngModelChange)="changeselect3($event)">\n
				<option value="5">5%</option>\n
				<option value="10">10%</option>\n
				<option value="15">15%</option>\n
				<option value="20">20%</option>\n
				<option value="25">25%</option>\n
			</select>`
 
})
export class AppSelect3Component {
	@Output() changeParentSelect3: EventEmitter<number> = new EventEmitter<number>(); 
	select3 = 5;
	
	changeselect3( event : any ){
		this.changeParentSelect3.emit(event);
	}
}