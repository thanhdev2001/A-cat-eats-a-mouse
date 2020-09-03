chalk = require('chalk')
Mouse = require('./mouse')
function Cat(name){
    this.name = name
    this.stomach = []
}


Cat.prototype.eat = function (Mouse){
    this.stomach.push(Mouse)
}

Cat.prototype.SaySomething = function(){
    console.log("Hi I'm " + chalk.yellow(this.name))
}

module.exports = Cat