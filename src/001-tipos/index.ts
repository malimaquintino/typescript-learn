let nome : string = 'matheus';
let idade : number = 30;
let adulto : boolean = true;
let salario : number = 2134.30;

// array
let aNum1 : Array<number> = [1, 2, 3];
let aNum2 : number[] = [1, 2, 3];
let aString1 : Array<string> = ['abacaxi', 'banana'];
let aString2 : string[] = ['abacaxi', 'banana'];

// object
let pessoa: {
    nome : string,
    idade : number,
    adulto? : boolean // ? é um atributo opcional
} = {
    nome : "Matheus",
    idade : 30
};

// functions
function soma(x:number, y:number) : number {
    return x + y;
}

const soma2 : (x: number, y:number) => number = (x, y) => x + y;
