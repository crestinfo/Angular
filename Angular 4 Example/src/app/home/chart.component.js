"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppChartComponent = (function () {
    function AppChartComponent() {
        var _this = this;
        setTimeout(function () {
            _this.changeChartValues();
        }, 100);
    }
    AppChartComponent.prototype.changeChartValues = function () {
        var _this = this;
        setTimeout(function () {
            var startYear = (new Date().getFullYear());
            var yearDiff = _this.chartRetire - _this.chartAge;
            var yAxis = [];
            var data1 = [];
            var data2 = [];
            var chartData1 = _this.chartRange1;
            var chartData2 = _this.chartRange2;
            var selectData1 = _this.chartSelect1;
            var selectData2 = _this.chartSelect2;
            var selectData3 = _this.chartSelect3;
            for (var loopIndex = startYear; loopIndex <= (startYear + yearDiff); loopIndex++) {
                yAxis.push(loopIndex);
                chartData1 += ((selectData1 * chartData1 / 1000) + (selectData2 * chartData1 / 1000) + (selectData2 * chartData1 / 1000));
                chartData2 += ((selectData1 * chartData2 / 1000) + (selectData2 * chartData2 / 1000) + (selectData2 * chartData2 / 1000));
                data1.push(chartData1);
                data2.push(chartData2);
            }
            //console.log(yAxis);
            //console.log(data1);
            //console.log(data2);
            _this.options = {
                chart: { type: 'area', height: 600 },
                title: { text: 'Pension Chart' },
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
                    }, {
                        name: 'Pension',
                        data: data2
                    }]
            };
        }, 1000);
    };
    return AppChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AppChartComponent.prototype, "chartAge", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AppChartComponent.prototype, "chartRetire", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AppChartComponent.prototype, "chartRange1", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AppChartComponent.prototype, "chartRange2", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AppChartComponent.prototype, "chartSelect1", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AppChartComponent.prototype, "chartSelect2", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AppChartComponent.prototype, "chartSelect3", void 0);
AppChartComponent = __decorate([
    core_1.Component({
        selector: 'pension-chart',
        styles: ["\n      chart {\n        display: block;\n      }\n    "],
        template: "<chart [options]=\"options\"></chart> <div align=\"center\"><button class=\"btn btn-primary\" type=\"button\" (click)=\"changeChartValues()\" >Refesh Chart</button></div>"
    }),
    __metadata("design:paramtypes", [])
], AppChartComponent);
exports.AppChartComponent = AppChartComponent;
//# sourceMappingURL=chart.component.js.map