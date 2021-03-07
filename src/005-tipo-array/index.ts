export function multplicarArgs(...args: Array<number>): number { // Array<number> generics
    return args.reduce((ac, valor)=> ac * valor, 1);
}

export function concatenarStrongs(...args: string[]) :string {
    return args.join("");
}

export function upperCase(...args:string[]): string[]{
    return args.map((val)=> val.toUpperCase());
}

console.log(multplicarArgs(1,2,3));
console.log(concatenarStrongs("a", "b", "c"));
console.log(upperCase("a", "b", "c"));
