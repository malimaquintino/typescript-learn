export class Person{
    constructor(private _name: string, private _lastName:string, private _age:number){}

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
}

const person = new Person("Anna", "Meg", 36);

person.name = "Amanda";    // call set function
person.lastName = "Smith"; // call set function
console.log(person.name);  // call get function
