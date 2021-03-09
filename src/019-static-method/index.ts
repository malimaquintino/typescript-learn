export class Person{
    static defaultAge = 0;
    constructor(
        private _name: string,
        private _lastName:string,
        private _age:number
    ) {}

    get name():string{
        return this._name;
    }
    set name(name:string){
        this._name = name;
    }

    get lastName():string{
        return this._lastName;
    }
    set lastName(lastName:string){
        this._lastName = lastName;
    }

    get age():number{
        return this._age;
    }
    set age(age:number){
        this._age = age;
    }

    getFullName():string{
        return `name is: ${this.name} ${this.lastName}`;
    }

    static createPerson(name:string, lastName:string){
        return new Person(name, lastName, Person.defaultAge);
    }
}

const person = new Person("Anna", "Meg", 36);
console.log(person)
const person2 = Person.createPerson("Mathew", "Joseph");
console.log(person2)

