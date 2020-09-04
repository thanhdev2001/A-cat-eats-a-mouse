var Cat = require('./cat.js')
var Mouse = require('./mouse.js')
var Dog = require('./dog.js')

Mouse = new Mouse('Jerry')
Cat = new Cat('Thomas')

try{
    Cat.eat(Dog)
}
catch{
    console.log('Cat only eat mouse')
}


console.log(Cat)

Cat.SaySomething();