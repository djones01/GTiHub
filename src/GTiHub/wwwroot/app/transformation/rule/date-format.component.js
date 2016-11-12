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
var core_1 = require('@angular/core');
var DateFormatComponent = (function () {
    function DateFormatComponent() {
        //Fields for date
        this.dateParts = [];
        this.datePattern = "";
        this.dateExamplePattern = "";
        this.hasValidFormat = false;
        this.presetOpts = [
            { value: "dd/MM/yyyy", display: "dd/MM/yyyy" },
            { value: "MM/dd/yyyy", display: "MM/dd/yyyy" },
            { value: "yyyy/MM/dd", display: "yyyy/MM/dd" },
            { value: "yyyy/dd/MM", display: "yyyy/dd/MM" },
        ];
        this.dateOptions = [
            {
                label: "Day", options: [
                    { value: "d", display: "Day: 1 - 31" },
                    { value: "dd", display: "Day: 01 - 31" },
                    { value: "ddd", display: "Day: Mon" },
                    { value: "dddd", display: "Day: Monday" }
                ]
            },
            {
                label: "Month", options: [
                    { value: "M", display: "Month: 1 - 12" },
                    { value: "MM", display: "Month: 01 - 12" },
                    { value: "MMM", display: "Month: Jun" },
                    { value: "MMMM", display: "Month: June" }
                ]
            },
            {
                label: "Year", options: [
                    { value: "yy", display: "Year: 00 - 99" },
                    { value: "yyyy", display: "Year: 1900" }
                ]
            }];
    }
    DateFormatComponent.prototype.deleteDatePart = function (i) {
        this.dateParts.splice(i, 1);
        this.modifyDatePattern();
    };
    DateFormatComponent.prototype.addDatePart = function () {
        this.dateParts.push(new DatePart('', ''));
    };
    DateFormatComponent.prototype.modifyDatePattern = function () {
        this.datePattern = "";
        //Create the date pattern from the date parts
        for (var i = 0; i < this.dateParts.length; i++) {
            this.datePattern += this.dateParts[i].value;
        }
        var dateFormat = require('dateformat');
        this.dateExamplePattern = dateFormat(new Date(), this.datePattern);
        var timestamp = Date.parse(this.dateExamplePattern);
        if (isNaN(timestamp) == false) {
            this.hasValidFormat = true;
        }
        else {
            this.dateExamplePattern = "Invalid Format";
            this.hasValidFormat = false;
        }
    };
    DateFormatComponent.prototype.ngOnInit = function () { };
    DateFormatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'date-format',
            templateUrl: 'date-format.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DateFormatComponent);
    return DateFormatComponent;
}());
exports.DateFormatComponent = DateFormatComponent;
var DatePart = (function () {
    function DatePart(type, value) {
        this.type = type;
        this.value = value;
    }
    return DatePart;
}());
//# sourceMappingURL=date-format.component.js.map