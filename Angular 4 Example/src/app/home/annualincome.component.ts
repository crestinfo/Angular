import { Component } from '@angular/core';


@Component({
  selector: 'ng2-slider',
  template: `<ng2-slider min="1" max="14" value="5" (onRangeChanged)="plainValueChanged($event, 'plain_1')">`
})
export class AppAnnualIncomeComponent { 
	startAge = 0;
	getVal( event : any ){
		this.startAge = event.target.value;
	}
}