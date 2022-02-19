const str1 = 'String 1'
const str2 = " String 2 "

const answer1 = "It's alright";
const answer2 = "He is called 'Johnny'";
const answer3 = 'He is called "Johnny"';

console.log('str1 -> ', str1)
console.log('str2 -> ', str2)
console.log('length of str1 -> ', str1.length)
console.log('length of str1 and str2 -> ', str1.length + str2.length)

const text = "We are the so-called \"Vikings\" from the north.";

console.log('text -> ', text)

const backslash_text = 'The character \\\\ is called backslash.'

console.log('backslash_text -> ', backslash_text)

const multiple_line_text = 'This is line 1\nThis is line 2'

console.log(multiple_line_text)

const backspace_text = 'This is backspace &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#38; & ← text'

console.log('backspace_text -> ', backspace_text)

document.write(backspace_text)

let str = "Apple, Banana, Kiwi";
let banana = str.slice(7, 13);
console.log('banana -> ', banana)

let banana1 = str.slice(-12, -6);
console.log('banana1 -> ', banana1)

let banana2 = str.substring(7, 13);
console.log('banana2 -> ', banana2)

let banana3 = str.substr(7, 6);
console.log('banana3 -> ', banana3)

let microsoft = "Please visit Microsoft!";
let newText = microsoft.replace("Microsoft", "W3Schools");
console.log('newText -> ', newText)

const hello_world_text = 'Hello World'
console.log('to_upper_case -> ', hello_world_text.toUpperCase())
console.log('to_lower_case -> ', hello_world_text.toLowerCase())

console.log('concat of str1 and str2 -> ', str1.concat(' ' + str2))

console.log('length of str1 and str2 with trim str2 -> ', str1.length + str2.trim().length)

let text_char = "HELLO WORLD";
let char = text_char[0];
console.log('char -> ', char)

console.log('str array -> ', str.split(', '))