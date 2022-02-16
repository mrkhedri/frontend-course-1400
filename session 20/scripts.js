// ..........let variable
let greeting = "Good By";

function showLetAndConstSample() {
    let greeting = "Hi";
    greeting = 'Hello'
    document.getElementById("show-let-blocked").innerHTML = 'Let in my Block {} =' + greeting;
}
document.getElementById("show-let-blocked").innerHTML = 'Global Let =' + ' ' + greeting;

// ..........const variable
//..........POINT »» just edit on const when :const equal object Or Array 👇
const name = 'amin';
//name = 252;      This will give an error
//name = name + 10;   This will also give an error

//Other Sample 👇
//........... Create an Array:
const cars = ["Saab", "Volvo", "BMW"];
// Change an element:
cars[0] = "Toyota";
// Add an element:
cars.push("Audi");
// Display the Array:
document.getElementById("show-const-array-variable").innerHTML = "change index of array  --->" + ' ' + cars;

//........... Create an Object:
const person = {
    name: "John",
    lastname: "Doe"
}
document.getElementById("show-const-object-variable-before").innerHTML = "before change item of object  --->" + ' ' + person.name;
person.name = "Mohammad";
document.getElementById("show-const-object-variable-after").innerHTML = "after change item of object  --->" + ' ' + person.name;

// ..................Arithmetic Operators example
let x = 10;
let y = 10;
let z = 10;
x += 2
y -= 2
z *= 2
document.getElementById("Assignments-sample").innerHTML = " x+=2 »»" + ' ' + x;
document.getElementById("Subtraction-sample").innerHTML = " y-=2 »»" + ' ' + y;
document.getElementById("Multiplication-sample").innerHTML = "z*=2 »»" + ' ' + z;

function showIncrementSample(xVal) {
    let x;
    let y;
    x = xVal;
    y = ++x // x+1
    z = --x; // x-1
    let exponentiation = x ** 2; // x*x
    // let exponentiation = 2 ** 5; // 2*2*2*2*2 ECMAScript 2016  --->https://www.w3schools.com/js/js_2016.asp
    document.getElementById("showIncrementSample").innerHTML = "y = ++x »»" + " " + y;
    document.getElementById("showDecrementSample").innerHTML = "z =--x »»" + " " + z;
    document.getElementById("showExponentiationOperatorSample").innerHTML = "exponentiation = x ** 2 »»" + " " + exponentiation;
}
// ..................JavaScript Functions
function invokesFunctionSample() {
    document.getElementById("invokes-function").innerHTML = "When it is invoked (called) from JavaScript code";
}
invokesFunctionSample();// invokes (calls) the function

function onClicksButtonSample(parameter1, parameter2) {
    document.getElementById("onClicks-button-sample").innerHTML = "return »»" +  parameter2 * parameter2;
}


