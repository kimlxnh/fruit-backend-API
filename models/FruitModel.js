const fruits = require('../fruits.json')
//OOP - object oriented programming. use class to copy this blueprint to all the other fruits available
class Fruit {
    constructor (fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions
    }
    static showAll(){
        return fruits.map(q => new Fruit(q))
    }
    static show(name){
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name)
        if (fruit){
            return new Fruit (fruit)
        } else {
            throw 'The fruit does not exist'
        }
    }

    static create(data){
        const newFruit = data
        if (!data.name){
            throw 'A fruit needs a name'
            //e.g. if only genus is listed
        }
        const fruit = fruits.find((fruit)=> fruit.name.toLowerCase() == data.name.toLowerCase())
        if(fruit){
            throw 'The fruit already exists'
        } else {
        newFruit['id'] = Math.max (...fruits.map(fruit => fruit.id)) + 1
        fruits.push(newFruit)
        return new Fruit(newFruit)
        }
    }
    update(data){
        const updateFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
        if (updateFruit){
            if (data.name) updateFruit.name = data.name
            if (data.family) updateFruit.family = data.family
            return new Fruit(updateFruit)
        } else {
            throw 'Fruit not found'
        }
    }
    destroy () {
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() == this.name.toLowerCase())
        if (deletedFruit) {
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index, 1) 
        } else {
            throw 'Fruit not found'
        }
    }
}

module.exports = Fruit


