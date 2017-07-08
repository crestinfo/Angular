import { Component } from '@angular/core';
import { AppChartComponent }  from './chart.component';

@Component({
  selector: 'pension-app',
  templateUrl: `app/home/app.component.html`,
  
})
export class AppComponent {
	
	 
	name = 'Angular';
	parentSaved = Math.floor(Math.random() * 1000) + 500;
	parentAgeStart: number = 20;
	parentAgeEnds: number = 50;
	
	parentRange1: number = 20000;
	parentRange2: number = 15000;
	
	parentSelect1: number = 5;
	parentSelect2: number = 5;
	parentSelect3: number = 5;
	
	changeSaved(){
		this.parentSaved = Math.floor(Math.random() * 1000) + 500;
	}
	changeRange1(value:any) {
		this.parentRange1 = value;
		this.changeSaved();
	}
	
	changeRange2(value:any) {
		this.parentRange2 = value;
		this.changeSaved();
	}
	
	onChangeParentStartAge(value:any){
		this.parentAgeStart= value;
		this.changeSaved();
	}
	
	onChangeParentEndAge(value:any){
		this.parentAgeEnds= value;
		this.changeSaved();
	}
	
	onChangeParentSelect1(value:any){
		this.parentSelect1=value;
		this.changeSaved();
	}
	onChangeParentSelect2(value:any){
		this.parentSelect2=value;
		this.changeSaved();
	}
	onChangeParentSelect3(value:any){
		this.parentSelect3=value;
		this.changeSaved();
	}
}
