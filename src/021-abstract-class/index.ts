export abstract class Character{
    protected abstract icon:string
    constructor(
        protected name:string,
        protected attackPower: number,
        protected _life: number,
    ){}

    get life(){
        return this._life;
    }

    attack(enemy:Character):void{
        this.warCry();
        console.log(`${this.name} attacked ${enemy.name}`);
        enemy.lostLife(this.attackPower);
    }

    lostLife(attackPower:number):void {
        console.log(`${this.name} lost ${attackPower} life points`);
        this._life -= attackPower;
        console.log(`${this.name} now has ${this.life} life points`);
    }

    abstract warCry():void;
}

export class Warrior extends Character{
    protected icon = '\u{1f9dd}';
    warCry(){
        console.log(this.icon + " For my honor!!!!");
    }
}
export class Monster extends Character{
    protected icon = '\u{1F9DF}';
    warCry(){
        console.log(this.icon + "Die human!!!");
    }
}

const warrior = new Warrior("Sir Lorence", 100, 1000);
const monster = new Monster("Orc", 87, 1000);

warrior.attack(monster);
monster.attack(warrior);


