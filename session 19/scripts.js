/*
* plus two number
*/
function plusNumbers() {
  let x = 5; // initial x
  let y = 6; // initial y
  let z = x + y; // sum of x and y

  document.getElementById("plus-numbers").innerHTML = "The value of z is " + z + ".";
}

function isEqual(value1, value2) {
  /*
  * =   equal sign (=) is an "assignment" operator
  * ==  converts the variable values to the same type before performing comparison
  * === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.
  * */
  if (value1 === value2) {
    document.getElementById("is-equal").innerHTML = "True";
  } else {
    document.getElementById("is-equal").innerHTML = "False";
  }
}

