import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'select2',
  template:`<select class="selectBox" [(ngModel)]="select2" (ngModelChange)="changeselect2($event)">\n
				<option value="5">5%</option>\n
				<option value="10">10%</option>\n
				<option value="15">15%</option>\n
				<option value="20">20%</option>\n
				<option value="25">25%</option>\n
			</select>`
 
})
export class AppSelect2Component {
	@Output() changeParentSelect2: EventEmitter<number> = new EventEmitter<number>(); 
	select2 = 10;
	
	changeselect2( event : any ){
		this.changeParentSelect2.emit(event);
	}
}