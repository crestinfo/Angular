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
var AppSelect3Component = (function () {
    function AppSelect3Component() {
        this.changeParentSelect3 = new core_1.EventEmitter();
        this.select3 = 5;
    }
    AppSelect3Component.prototype.changeselect3 = function (event) {
        this.changeParentSelect3.emit(event);
    };
    return AppSelect3Component;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AppSelect3Component.prototype, "changeParentSelect3", void 0);
AppSelect3Component = __decorate([
    core_1.Component({
        selector: 'select3',
        template: "<select class=\"selectBox\" [(ngModel)]=\"select3\" (ngModelChange)=\"changeselect3($event)\">\n\n\t\t\t\t<option value=\"5\">5%</option>\n\n\t\t\t\t<option value=\"10\">10%</option>\n\n\t\t\t\t<option value=\"15\">15%</option>\n\n\t\t\t\t<option value=\"20\">20%</option>\n\n\t\t\t\t<option value=\"25\">25%</option>\n\n\t\t\t</select>"
    })
], AppSelect3Component);
exports.AppSelect3Component = AppSelect3Component;
//# sourceMappingURL=select3.component.js.map