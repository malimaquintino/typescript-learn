// define um tipo para cada indice do array
const tupla1 : [number, string] = [1, 'Matheus']; // não acessa o sobrenome, mas da para fazer um push, para evitar usar readonly
const tupla2 : readonly [number, string, string] = [1, 'Matheus', "Quintino"];
const tupla3 : [number, string, string?] = [1, 'Matheus']; // sobrenome opcional
const tupla4 : [number, string, ...string[]] = [1, 'Matheus', 'Lima', 'Quintino']; // numero e nome obrigatorio e agora posso add qntas strings eu quiser

// só posso mudar o valor do indice por valores do mesmo tipo
tupla1[0] = 1000;
tupla1[1] = "Anna";

console.log(tupla1)
console.log(tupla2)
console.log(tupla3)
console.log(tupla4)
