let fruits = ["Banana", "Orange", "Apple", "Mango"]
const foods = ["salad", "pasta", "Chicken"]

console.log('fruits -> ', fruits)
console.log('foods -> ', foods)

console.log('join -> ', fruits.toString())
console.log('join -> ', fruits.join(' @ '))

console.log('pop -> ', fruits.pop())
console.log('fruits -> ', fruits)
console.log('push -> ', fruits.push('Kiwi'))
console.log('fruits -> ', fruits)

console.log('shift -> ', fruits.shift())
console.log('fruits -> ', fruits)
console.log('unshift -> ', fruits.unshift('Lemon'))
console.log('fruits -> ', fruits)

console.log('push -> ', fruits.push('should be delete item'))
console.log('fruits -> ', fruits)
delete fruits[4]
console.log('fruits -> ', fruits)
fruits.pop()
console.log('fruits -> ', fruits)

console.log('concat -> ', fruits.concat(foods))

console.log('fruits -> ', fruits)
console.log('splice -> ', fruits.splice(1, 2, 'Banana', 'Item 2'))
console.log('fruits -> ', fruits)

fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log('fruits -> ', fruits)

console.log('slice(2) -> ', fruits.slice(2))
console.log('slice(2, 3) -> ', fruits.slice(2, 3))
console.log('fruits -> ', fruits)

// Sort
console.log('sort -> ', fruits.sort())
console.log('reverse -> ', fruits.reverse())

const points = [40, 100, 1, 5, 25, 10];
console.log('points -> ', points)
console.log('sort numeric -> ', points.sort((a, b) => a - b))
















