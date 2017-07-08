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
var AppStartAgeComponent = (function () {
    function AppStartAgeComponent() {
        this.changeParentStartAge = new core_1.EventEmitter();
        this.startAge = 20;
    }
    AppStartAgeComponent.prototype.getVal = function (event) {
        this.startAge = event.target.value;
    };
    AppStartAgeComponent.prototype.changeStartAge = function (event) {
        this.changeParentStartAge.emit(this.startAge);
    };
    return AppStartAgeComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], AppStartAgeComponent.prototype, "changeParentStartAge", void 0);
AppStartAgeComponent = __decorate([
    core_1.Component({
        selector: 'input-age-start',
        template: "<input type=\"text\" class=\"age cyan-text\" (keyup)=\"getVal($event)\" [(ngModel)]=\"startAge\" (ngModelChange)=\"changeStartAge($event);\"/>"
    })
], AppStartAgeComponent);
exports.AppStartAgeComponent = AppStartAgeComponent;
//# sourceMappingURL=startage.component.js.map