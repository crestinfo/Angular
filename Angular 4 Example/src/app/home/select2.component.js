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
var AppSelect2Component = (function () {
    function AppSelect2Component() {
        this.changeParentSelect2 = new core_1.EventEmitter();
        this.select2 = 10;
    }
    AppSelect2Component.prototype.changeselect2 = function (event) {
        this.changeParentSelect2.emit(event);
    };
    return AppSelect2Component;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AppSelect2Component.prototype, "changeParentSelect2", void 0);
AppSelect2Component = __decorate([
    core_1.Component({
        selector: 'select2',
        template: "<select class=\"selectBox\" [(ngModel)]=\"select2\" (ngModelChange)=\"changeselect2($event)\">\n\n\t\t\t\t<option value=\"5\">5%</option>\n\n\t\t\t\t<option value=\"10\">10%</option>\n\n\t\t\t\t<option value=\"15\">15%</option>\n\n\t\t\t\t<option value=\"20\">20%</option>\n\n\t\t\t\t<option value=\"25\">25%</option>\n\n\t\t\t</select>"
    })
], AppSelect2Component);
exports.AppSelect2Component = AppSelect2Component;
//# sourceMappingURL=select2.component.js.map