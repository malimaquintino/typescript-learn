type TemNome = {nome : string};
type TemSobrenome = {sobrenome : string};
type TemIdade = {idade : number};
type Pessoa =  TemNome | TemSobrenome | TemIdade; // deve ter um dos tipos definidos os outros não são necessarios
type Pessoa2 =  TemNome & TemSobrenome & TemIdade; // deve ter todos os tipos

const pessoa1 : Pessoa = {
    idade: 30
}

const pessoa2 : Pessoa2 = {
    idade: 30,
    nome:"matheus",
    sobrenome:"quintino"
}

console.log(pessoa1);
console.log(pessoa2);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD; // Intersection tem apenas o valor A como possivel atributo

export default 1
