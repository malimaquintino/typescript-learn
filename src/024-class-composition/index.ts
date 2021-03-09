// composição uma classe depende de outra para existir, um motor não existe sem o carro
export class Car{
    private readonly engine = new Engine();

    turnOn(){
        this.engine.turnOn();
    }

    turnOff(){
        this.engine.turnOff();
    }

    speedUp(){
        this.engine.speedUp();
    }

    stop(){
        this.engine.stop();
    }
}

export class Engine{
    turnOn(){
        console.log("turn on the engine");
    }

    turnOff(){
        console.log("turn off the engine");
    }

    speedUp(){
        console.log("speed up");
    }

    stop(){
        console.log("stop");
    }
}

const car = new Car();
car.turnOn();
car.speedUp();
car.stop();
car.turnOff();
