// associação entre classes uma classe pode existir sem a outra
export class Writer{
    private _tool : Tool | null = null;
    constructor(private _name:string){}

    get name():string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }

    get tool():Tool{
        return this._tool as Tool;
    }

    set tool(tool: Tool){
        this._tool = tool;
    }

    write():void{
        if (this.tool===null){
            console.log("I can't write without a tool");
            return;
        }
        this.tool.write();
    }
}

export abstract class Tool {
    constructor(private _name:string){}
    abstract write():void;

    get name():string{
        return this._name;
    }
}

export class Pen extends Tool{
    write():void{
        console.log(`${this.name} is writing...`);
    }
}

export class Typewriter extends Tool{
    write():void{
        console.log(`${this.name} is typing...`);
    }
}


const writer = new Writer("Joseph Dukoku");
const pen = new Pen("Bic");
const typewriter = new Typewriter("Fx320-200");

console.log(writer.name)
console.log(typewriter.name)
console.log(pen.name)

writer.write()
typewriter.write()
pen.write()

writer.tool = pen;
writer.write();

writer.tool = typewriter;
writer.write();
