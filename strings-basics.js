const message = '    Hello Javascript Students    ';
const msgToLowerCase = message.toLowerCase();
const msgToUpperCase = message.toUpperCase();
const noSpaces = message.trim();
const engineers = message.replace('Students' , 'Engineers');
const onlyPart = message.substring(9 , 14)
const serach = message.startsWith('H')

// console.log(message);
// console.log(msgToLowerCase);
// console.log(msgToUpperCase);
// console.log(noSpaces);
// console.log(engineers);
// console.log(onlyPart);
// console.log(noSpaces.startsWith('H'));
// console.log(noSpaces.endsWith('s'));
console.log(noSpaces.includes('Javascript'));

const school = 'Boca Code';
const myIndex = school.indexOf('Code');
console.log(myIndex);

const myString = 'Hello world of neew possibilities';
const newString = myString.split(' ');
console.log(newString.reverse());


