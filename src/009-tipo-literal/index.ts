// let permite mudar o valor da var x
let x = 10
x = 0b1010

// cost não permite mudar o valor depois de atribuido
const y = 100
// y = 100 erro

// tipo literal w só pode receber o valor 100
let w:100 = 100
// w = 200 erro

// o valor z não pode mais mudar
let z = 200 as const
const pessoa = {
    nome:"matheus" as const,
    sobrenome:"quintino"
}
// pessoa.nome = 'Joao' erro


// define tipo literal para as opçoes possiveis de parametros
function escolhaCor (cor : 'Azul' | 'Verde' | 'Amarelo'): string{
    return cor;
}
console.log(escolhaCor('Azul'));

// module mode
export default 1
