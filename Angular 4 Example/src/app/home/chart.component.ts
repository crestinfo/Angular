import { Component, Input} from '@angular/core';
import { AppComponent }  from './app.component';
 
@Component({
    selector: 'pension-chart',
	styles: [`
      chart {
        display: block;
      }
    `],
    template: `<chart [options]="options"></chart> <div align="center"><button class="btn btn-primary" type="button" (click)="changeChartValues()" >Refesh Chart</button></div>`
})
export class AppChartComponent {

	@Input() chartAge:number;
	@Input() chartRetire:number;
	
	@Input() chartRange1:number;
	@Input() chartRange2:number;
	
	@Input() chartSelect1:number;
	@Input() chartSelect2:number;
	@Input() chartSelect3:number;
	
	constructor() {
		setTimeout(()=>{
			this.changeChartValues();
		}, 100);
	}
	
	changeChartValues(){
		
		setTimeout(()=>{
		var startYear = (new Date().getFullYear());
		var yearDiff = this.chartRetire-this.chartAge;
		
		var yAxis=[];
		var data1=[];
		var data2=[];
		
		var chartData1 = this.chartRange1;
		var chartData2 = this.chartRange2;
		
		var selectData1 = this.chartSelect1;
		var selectData2 = this.chartSelect2;
		var selectData3 = this.chartSelect3;
		
		for(var loopIndex=startYear; loopIndex<=(startYear+yearDiff); loopIndex++){
			yAxis.push(loopIndex);
			chartData1 += ( (selectData1*chartData1/1000) + (selectData2*chartData1/1000) + (selectData2*chartData1/1000) );
			chartData2 +=( (selectData1*chartData2/1000) + (selectData2*chartData2/1000) + (selectData2*chartData2/1000) );
			
			data1.push(chartData1);
			data2.push(chartData2);
			
		}
		//console.log(yAxis);
		//console.log(data1);
		//console.log(data2);
		
		this.options = {
			chart: {type: 'area', height:600},
            title : { text : 'Pension Chart' },
			xAxis: {
				categories: yAxis,
				tickmarkPlacement: 'on',
				title: {
					enabled: false
				}
			},
			series: [{
				name: 'Income',
				data: data1
			},{
				name: 'Pension',
				data: data2
			}]
        };
		}, 1000);
	}
    options: Object;
}