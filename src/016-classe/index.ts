export class Company {
    public readonly name: string;
    protected readonly cnpj:string;
    private readonly employees: Employee[] = [];

    constructor(name : string, cnpj:string){
        this.name = name;
        this.cnpj = cnpj;
    }

    addEmployee(employee:Employee):void {
        this.employees.push(employee);
    }
}

export class Employee {
    constructor(public name: string, public lastName:string){}
}

const myCompany = new Company("Udemy", "123.123.123/0001-45");
console.log(myCompany);

const employee1 = new Employee("Mathew", "Smith");
const employee2 = new Employee("Anna", "Meg");
const employee3 = new Employee("Bob", "Corn");

myCompany.addEmployee(employee1);
myCompany.addEmployee(employee2);
myCompany.addEmployee(employee3);

console.log(myCompany);
