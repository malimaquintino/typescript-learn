const ObjetoA: {
    valorA:string,
    readonly valorB:string, // depois de atribuido o valor não permite mais mudar o valor dela
    valorc?:string,
    [key:string]:unknown // permite q o objeto crie qnto campos necessarios
} = {
    valorA: "abc",
    valorB: "yhb",
}

ObjetoA.valorA = "Matheus";
ObjetoA.valorC = "Abacaxi";
ObjetoA.qlqrCoisa = "lorem ipsun...";

console.log(ObjetoA)
