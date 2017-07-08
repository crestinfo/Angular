import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NouisliderModule } from 'ng2-nouislider';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent }  from './home/app.component';
import { AppStartAgeComponent }  from './home/startage.component';
import { AppEndAgeComponent }  from './home/endage.component';

import { AppSelect1Component }  from './home/select1.component';
import { AppSelect2Component }  from './home/select2.component';
import { AppSelect3Component }  from './home/select3.component';

import { AppChartComponent }  from './home/chart.component';



//import { AppAnnualIncomeComponent }  from './home/annualincome.component';


var declarationsArr = [ 
	AppComponent, 
	AppStartAgeComponent, 
	AppEndAgeComponent,
	AppSelect1Component,
	AppSelect2Component,
	AppSelect3Component,
	AppChartComponent,
];

var bootstrapArr = [ 
	AppComponent, 
];

var importArr =[
	BrowserModule,
	FormsModule,
	NouisliderModule,
	ChartModule.forRoot(require('highcharts')),
];

@NgModule({
  imports		: importArr,
  declarations	: [ 
	AppComponent, 
	AppStartAgeComponent, 
	AppEndAgeComponent,
	AppSelect1Component,
	AppSelect2Component,
	AppSelect3Component,
	AppChartComponent,
  ],
  bootstrap		: bootstrapArr,  
})
export class AppModule {

}
