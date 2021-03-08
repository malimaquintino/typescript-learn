// retorna mais de um tipo

export function addOrConcatena(x:number | string, y:number | string): number | string{
    if(typeof x === 'number' && typeof y === 'number') return x + y;
    return `${x}${y}`;
}

console.log(addOrConcatena(10, 20));
console.log(addOrConcatena('10', '20'));
console.log(addOrConcatena(10, '20'));
console.log(addOrConcatena('10', 20));
