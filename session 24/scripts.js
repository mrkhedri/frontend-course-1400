console.log('1 -> ', (1996).toString());
console.log('2 -> ', (1996).toString().length)
console.log('3 -> ', typeof 1.966) // float number

const number = 1996
const number_str = '1996'
const float_number = 1.996
const float_number_str = '1.996'

console.log('float_number -> ', float_number)
console.log('4 -> ', float_number.toExponential())
console.log('5 -> ', float_number.toExponential(2))
console.log('6 -> ', float_number.toFixed(2))
console.log('7 -> ', float_number.toPrecision(2))

console.log('8 -> ', "9.656".replaceAll('.', '').length)


// There are 3 JavaScript methods that can be used to convert variables to numbers:
console.log('3 JavaScript methods for to number')
console.log('number_str -> ', number_str)
console.log('float_number_str -> ', float_number_str)
console.log('1 -> ', parseInt(number_str))
console.log('2 -> ', parseFloat(float_number_str))
console.log('3 -> ', Number(number_str))

// There are 2 JavaScript methods that can be used to convert variables to string:
console.log('3 JavaScript methods for to string')
console.log('number -> ', number)
console.log('1 -> ', number.toString())
console.log('2 -> ', String(number))


// Number
console.log('Number methods')
console.log('1 -> ', 1996 / "ali")
console.log('2 -> ', Number.isNaN(1996 / "ali"))


// Arrays
console.log('Arrays')
const arr = [1, 5, 2, 3, 9, 6]
console.log('arr -> ', arr)
console.log('sort array -> ', arr.sort())
console.log('last value -> ', arr[arr.length - 1])
console.log('is array -> ', Array.isArray(arr))

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let fruit_list = "<div>";
for (let i = 0; i < fLen; i++) {
  fruit_list += "<span>" + fruits[i] + "</span>";
  fruit_list += "<br />";
}
fruit_list += "</div>";


let text = "<ul>";
fruits.forEach((value) => {
  text += "<li>" + value + "</li>";
});
text += "</ul>";

document.write(text)
