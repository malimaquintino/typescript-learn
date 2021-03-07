// se remover a anotation any gera erro do ts, para funcionar deve remover o strict = true do arqvo tsconfig.json
// evitar de usar any
function showValue(value: any){
    return value;
}

console.log(showValue([1, 2, 3]));
console.log(showValue('Olá'));
console.log(showValue(30.37));
