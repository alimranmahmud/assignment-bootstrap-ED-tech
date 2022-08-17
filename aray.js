
//problem-1:
var fruits = ['Apple', 'Banana', 'Orange'];
var index = fruits.indexOf('Banana');
console.log(index);
fruits[1] = 'Mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);
//problem-2:
var totalMarks = 100;
var marks = 99;
var Denmark = 85;
var Tom = 66;
var jane = 95;
var peter = 56;
var john = 39;
if (totalMarks == marks) {
    console.log('A +');
} else if (marks < totalMarks && marks >= 80) {
    console.log('A+');
} else if (marks < 80 && marks >= 70) {
    console.log('A');
} else if (marks < 70 && marks >= 60) {
    console.log('B');
} else if (marks < 60 && marks >= 50) {
    console.log('C');
} else if (marks < 50 && marks >= 40) {
    console.log('D');
} else if (marks < 40 && marks >= 39) {
    console.log('F');
}
//problem-3.1:
var a = 13;
var b = 79;
var c = 45;
if (a > b && a > c) {
    console.log('a is larze number');
} else if (b > a && b > c) {
    console.log('b =79 is larze number');
} else if (c > a && c > b) {
    console.log('c is larze number');
}
//problem-3.2:
var i = 9;
var j = 8;
var k = 9;
if (i == i || i == k) {
    console.log('Isosceles')
} else {
    console.log('not a triangle');
}
