export class Person{
    constructor(private name: string, private lastName:string, private age:number){}

    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name = name;
    }

    getLastName():string{
        return this.lastName;
    }
    setLastName(lastName:string):void{
        this.lastName = lastName;
    }

    getAge():number{
        return this.age;
    }
    setAge(age:number):void{
        this.age = age;
    }

    getFullName():string{
        return `name is: ${this.name} ${this.lastName}`;
    }
}

export class Student extends Person{
    constructor(name: string, lastName:string, age:number, private classNumber:number){
        super(name, lastName, age);
    }

    setClassNumber(classNumber:number):void{
        this.classNumber = classNumber;
    }

    getClassNumber():number{
        return this.classNumber;
    }

    getFullName():string{
        return `The student ${super.getFullName()}`;
    }
}

export class Client extends Person{
    getFullName():string{
        return `The client ${super.getFullName()}`;
    }
}

const person = new Person("Anna", "Meg", 36);
console.log(person.getFullName());
const student = new Student("Mathew", "Smith", 21, 39);
console.log(student.getFullName());
const client = new Client("Carlo", "Juarez", 49);
console.log(client.getFullName());
