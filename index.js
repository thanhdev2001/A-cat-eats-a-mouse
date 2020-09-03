var Cat = require('./cat.js')
var Mouse = require('./mouse.js')

Mouse = new Mouse('Jerry')
Cat = new Cat('Thomas')

Cat.eat(Mouse)

console.log(Cat)

Cat.SaySomething();