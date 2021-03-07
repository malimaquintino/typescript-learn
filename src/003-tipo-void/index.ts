function semRetorno(...args : String[]) : void {
    console.log(args.join(' - '))
}

const pessoa = {
    nome: "Matheus",
    sobrenome: "Quintino",
    exibirNome(): void {
        console.log(this.nome + " " + this.sobrenome )
    }
}

semRetorno('Bem', 'Vindo', 'Terraqueo');
pessoa.exibirNome();

export {pessoa}; // ja possuo pessoa declarado em outro arquivo
