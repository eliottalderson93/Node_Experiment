function Ninja(){
    this.name = null;
    this.health = null;
    this.speed = null;
    this.strength = null;

}
function Ninja(name,health,speed,strength){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
}
Ninja.prototype.sayName = function sayName(){
    let output = "My name is "+this.name + ".";
    console.log(output);
    return output;
}
Ninja.prototype.showStats = function showStats(){
    let output = "Name: "+this.name + ", Health: " + this.health.toString() + ", Speed: " + this.speed.toString() + ", Strength: " + this.strength.toString();
    console.log(output);
    return output;
}
Ninja.prototype.punch = function punch(enemy){
    var message = this.name + " punches " + enemy.name;
    console.log(message);
    enemy.health = enemy.health - 5;
    this.health = this.health - 1;
}
Ninja.prototype.kick = function kick(enemy){
    if (enemy instanceof Ninja){
        let message = this.name + " kicks " + enemy.name;
        console.log(message);
        enemy.health = enemy.health - 15*this.strength;
        this.health = this.health - 5;
    }
    else{
        console.log("you must kick a ninja");
    }
}
ninja1 = new Ninja("Roger",100,3,3);
ninja2 = new Ninja("Murph",150,2,5);
ninja2.name = "Murph";
//console.log(ninja1);
ninja1.punch(ninja2);
ninja2.kick(ninja1);
ninja1.showStats();
ninja2.showStats();
ninja1.kick(1);
//ninja2.showStats();


