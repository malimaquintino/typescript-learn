type Idade = number;
type Pessoa = {
    nome:string,
    idade: Idade,
    salario: number,
    corPreferida?:CorPreferida
}

type CorRGB = "Vermelho" | "Verede" | "Azul";
type CorCMYK = "Ciano" | "Magenta" | "Amarelo" | "Preto";
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
    nome: "Matheus",
    idade: 30,
    salario: 3100.82
}

function setCorPreferida(pessoa:Pessoa, cor:CorPreferida): Pessoa{
    return {...pessoa, corPreferida:cor}
}
console.log(pessoa);
console.log(setCorPreferida(pessoa, 'Ciano'));

export default 1
