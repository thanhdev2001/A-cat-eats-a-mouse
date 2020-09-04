chalk = require('chalk')
Mouse = require('./mouse')
function Cat(name){
    this.name = name
    this.stomach = []
}


Cat.prototype.eat = function (animal){
    if(animal instanceof Mouse){
        this.stomach.push(Mouse)
        Mouse.dead = true
    }
    else{
        throw new Error('Cat cannot eat this animal')
    }
    
}

Cat.prototype.SaySomething = function(){
    console.log("Hi I'm " + chalk.yellow(this.name))
}

module.exports = Cat