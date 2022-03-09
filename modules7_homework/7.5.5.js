class Appliances {
    constructor (name, power) {
        this.name = name;
        this.power = power;
        this.included = false;
    }

    getPower(){
        console.log('Мощность прибора '+this.name+' = '+this.power+' Вт')
    }

    on(){
        console.log(`${this.name} включен`);
        this.included = true
    }

    off(){
        console.log(`${this.name} выключен`);
        this.included = false
    }

    getHeight(){
        console.log('Высота  '+this.name+' =  '+this.height+' метров');
    }

    getScreen(){
        console.log('Диагональ экрана '+this.name+' = '+this.screen+' дюймов')}

}


class Television extends Appliances {
    constructor(screen, name, power){
        super(name, power);
        this.screen = screen;
    }
}

class Refregerator extends Appliances {
    constructor(height, name, power){
        super(name, power);
        this.height = height;
    }
}



const Fridge = new Refregerator (2, 'Bosch (refrigerator)', 1000)
const Tvset = new Television (20, 'Samsung TV-set', 150)


Fridge.on();
Fridge.off();
Fridge.getHeight();
Fridge.getPower();

Tvset.on();
Tvset.off();
Tvset.getScreen();
Tvset.getPower();



