type TypePerson = {
    name:string,
    lastName:string,
    fullName:() => string
}

export class Person implements TypePerson{
    constructor(public name:string, public lastName:string){}
    fullName():string{
        return `${this.name} ${this.lastName}`;
    }
}

const person = new Person("Matheus", "Quintino");
console.log(person.fullName());
