function Appliances(name, power){
    this.name = name;
    this.power = power;
    this.included = false;
}

Appliances.prototype.getPower = function(power){
    console.log('Мощность прибора '+this.name+' равна '+this.power+' Вт')
}

Appliances.prototype.getScreen = function(){
    console.log('Диагональ экрана '+this.name+' = '+this.screen+' дюймов')}


Appliances.prototype.getHeight = function(){
    console.log('Высота  '+this.name+' =  '+this.height+' метров');
}

Appliances.prototype.off = function(){
    console.log(`${this.name} выключен`);
        this.included = false
}

Appliances.prototype.on = function(){
    console.log(`${this.name} включен`);
        this.included = true
}


function Refregerator(height, name, power){
    this.name = name;
    this.power = power;
    this.height = height;
}


function Television(screen, name, power){
    this.name = name;
    this.power = power;
    this.screen = screen;
}


Refregerator.prototype = new Appliances();
Television.prototype = new Appliances();




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
  
 