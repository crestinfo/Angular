"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var ng2_nouislider_1 = require("ng2-nouislider");
var angular2_highcharts_1 = require("angular2-highcharts");
var app_component_1 = require("./home/app.component");
var startage_component_1 = require("./home/startage.component");
var endage_component_1 = require("./home/endage.component");
var select1_component_1 = require("./home/select1.component");
var select2_component_1 = require("./home/select2.component");
var select3_component_1 = require("./home/select3.component");
var chart_component_1 = require("./home/chart.component");
//import { AppAnnualIncomeComponent }  from './home/annualincome.component';
var declarationsArr = [
    app_component_1.AppComponent,
    startage_component_1.AppStartAgeComponent,
    endage_component_1.AppEndAgeComponent,
    select1_component_1.AppSelect1Component,
    select2_component_1.AppSelect2Component,
    select3_component_1.AppSelect3Component,
    chart_component_1.AppChartComponent,
];
var bootstrapArr = [
    app_component_1.AppComponent,
];
var importArr = [
    platform_browser_1.BrowserModule,
    forms_1.FormsModule,
    ng2_nouislider_1.NouisliderModule,
    angular2_highcharts_1.ChartModule.forRoot(require('highcharts')),
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: importArr,
        declarations: [
            app_component_1.AppComponent,
            startage_component_1.AppStartAgeComponent,
            endage_component_1.AppEndAgeComponent,
            select1_component_1.AppSelect1Component,
            select2_component_1.AppSelect2Component,
            select3_component_1.AppSelect3Component,
            chart_component_1.AppChartComponent,
        ],
        bootstrap: bootstrapArr,
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map