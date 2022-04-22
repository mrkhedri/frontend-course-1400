let textOne = `He's often called "Johnny"`;
let text =
    `The quick
brown fox
jumps over
the lazy dog`;

let firstName = "John";
let lastName = "Doe";
let z = "welcome"+ " " + firstName + " "+ lastName //welcome john Doe
let f = `welcome + firstName + lastName` //welcome + firstName + lastName
let e = `welcome ${firstName} ${lastName}` //welcome + firstName + lastName
console.log("f -->",f)
console.log("e -->",e)
console.log("z -->",z)
// ...........................................................
let html  = `<ul>`;
let tags = ["template literals", "javascript", "es6"];
for (const x of tags) {
    html += `<li>${x}</li>`;
}
html += `</ul>`
document.getElementById("demo").innerHTML = html;
// ...........................................................
let xx = "10";
let yy = "20";
let zz = x + y;
console.log("zz--->",zz) //1020

let numValue = 29;
let stringValue = "29";
// 1. Convert stringValue to a number
// 2. Compare 29 with 29
//.................................POINT
//5 == '5'             true
//0 == ''              true
// 0 == '0'            true
//0 == false           true
//.................................object === Or ==
let alex = { hairs: true }
let john = { hairs: true }
// console.log(alex == john); // false

let fruit1 = { name: 'potato' };
let fruit2 = fruit1;
console.log(fruit2 === fruit1); // true