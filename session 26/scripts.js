let fruits = ["Banana", "Orange", "Apple", "Mango"]
const foods = ["salad", "pasta", "Chicken"]
let numbers = [1, 2, 3, 4]

const sum = numbers.reduce(function(accumulator, currentValue ,index) {
    console.log('Accumulator is:' + accumulator)
    console.log('currentValue is:' + currentValue)
    console.log('index is:' + index)
    return accumulator + currentValue
})
// console.log(sum) // 10
/*
Accumulator is:  1
currentValue is: 2
index is       : 1

Accumulator is:  3
currentValue is: 3
index is       : 2

Accumulator is:  6
currentValue is: 4
index is       : 3
*/

//for sample☝
// var numbers = [1, 2, 3, 4]
// var sum = 0
//
// for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
//
// console.log(sum) // 10


