import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'date-format',
    templateUrl: 'date-format.component.html'
})
export class DateFormatComponent implements OnInit {
    //Fields for date
    dateParts: DatePart[] = [];
    datePattern: string = "";
    dateExamplePattern: string = "";
    hasValidFormat: boolean = false;

    dateOptions = [
        {
            label: "Day", options: [
                { value: "d", name: "Day: 1 - 31" },
                { value: "dd", name: "Day: 01 - 31" },
                { value: "ddd", name: "Day: Mon" },
                { value: "dddd", name: "Day: Monday" }
            ]
        },
        {
            label: "Month", options: [
                { value: "M", name: "Month: 1 - 12" },
                { value: "MM", name: "Month: 01 - 12" },
                { value: "MMM", name: "Month: Jun" },
                { value: "MMMM", name: "Month: June" }

            ]
        },
        {
            label: "Year", options: [
                { value: "yy", name: "Year: 00 - 99" },
                { value: "yyyy", name: "Year: 1900" }
            ]
        }];

    deleteDatePart(i: number) {
        this.dateParts.splice(i, 1);
        this.modifyDatePattern();
    }

    addDatePart() {
        this.dateParts.push(new DatePart('', ''));
    }

    modifyDatePattern() {
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
            this.dateExamplePattern = "Invalid Format"
            this.hasValidFormat = false;
        }
    }



    ngOnInit() { }
}

class DatePart {
    constructor(
        public type: string,
        public value: string
    ) { }
}