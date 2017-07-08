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
var AppEndAgeComponent = (function () {
    function AppEndAgeComponent() {
        this.changeParentEndAge = new core_1.EventEmitter();
        this.endAge = 50;
    }
    AppEndAgeComponent.prototype.getVal = function (event) {
        this.endAge = event.target.value;
    };
    AppEndAgeComponent.prototype.changeEndAge = function (event) {
        //document.getElementById('show-end-age').innerText = this.endAge;
        this.changeParentEndAge.emit(this.endAge);
    };
    return AppEndAgeComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AppEndAgeComponent.prototype, "changeParentEndAge", void 0);
AppEndAgeComponent = __decorate([
    core_1.Component({
        selector: 'input-age-end',
        template: "<input type=\"text\" class=\"age cyan-text\" (keyup)=\"getVal($event)\" [(ngModel)]=\"endAge\" (ngModelChange)=\"changeEndAge($event)\"/>"
    })
], AppEndAgeComponent);
exports.AppEndAgeComponent = AppEndAgeComponent;
//# sourceMappingURL=endage.component.js.map