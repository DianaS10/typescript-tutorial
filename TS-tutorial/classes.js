"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // name: string = 'DEFAULT';
        // private readonly id: string;
        // private name: string; 
        // public name: string; //public modifier is the default
        this.employees = [];
        // this.id = id;
        // this.name = name;
        // console.log(Department.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}
class AccountingDepartment extends Department {
    // singletone pattern -> only one Accounting Department
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error('Please pass in a valid value!');
        this.addReports(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment();
        'd2', [];
        return this.instance;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name); //not working if employees is a private property of class Department
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
//accounting.employees[2] = 'Ana'; //can be accessed if not private
//console.log(accounting);
it.describe();
it.printEmployeeInformation();
console.log(it);
//const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2); // are the same instance
accounting.addReports('Something went wrong');
//setter
accounting.mostRecentReport = 'Year end Report';
//getter
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printEmployeeInformation();
console.log(accounting);
//const accountingCopy = { describe: accounting.describe };
// Department: undefined; accountingCopy has no name property
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe(); 
//this refer to the thing that is responsible for calling it
