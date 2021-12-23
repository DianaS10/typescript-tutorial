abstract class Department {
    static fiscalYear = 2020;
    // name: string = 'DEFAULT';
    // private readonly id: string;
    // private name: string; 
    // public name: string; //public modifier is the default
    protected employees: string[] = [];

    constructor(protected readonly id: string, public  name: string) {
        // this.id = id;
        // this.name = name;
        // console.log(Department.fiscalYear);
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor (id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log('IT Department - ID: ' + this.id )
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
        
    }

    set mostRecentReport(value: string) {
        if (!value)
            throw new Error('Please pass in a valid value!');
        this.addReports(value);
    }

    // singletone pattern -> only one Accounting Department
    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    addEmployee(name: string) {
        if (name === 'Max') {
            return
        }
        this.employees.push(name); //not working if employees is a private property of class Department
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id )
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