import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'select1',
  template:`<select class="selectBox" name="select1" [(ngModel)]="select1" (ngModelChange)="changeselect1($event)">\n
				<option value="5">5%</option>\n
				<option value="10">10%</option>\n
				<option value="15">15%</option>\n
				<option value="20">20%</option>\n
				<option value="25">25%</option>\n
			</select>`
 
})
export class AppSelect1Component {
	@Output() changeParentSelect1: EventEmitter<number> = new EventEmitter<number>(); 
	select1 = 5;
	
	changeselect1( event : any ){
		this.changeParentSelect1.emit(event);
	}
}