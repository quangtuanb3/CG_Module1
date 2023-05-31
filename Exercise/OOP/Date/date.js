function Date(day, month, year) {

    this.day = day;

    this.month = month;

    this.year = year;

    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
    this.setDate = function (day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    this.toString = function () {
        return this.day + '/' + this.month + '/' + this.year;;
    }

};
let date = new Date(31, 5, 2023);

date.setDay(3)
date.setMonth(6);
date.setYear(2023);

date.setDate(10, 10, 2023)
alert(date.toString());