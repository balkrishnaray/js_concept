//practice question 1
let num = [1, 2, 3, 4, 5, 21, 12];
let y = prompt("Enter a number: ");
y = Number.parseInt(y);
num.push(y);
console.log(num);

//practice question 2

//   let num = [1, 2, 3, 4, 5, 21, 12];
let a;
do {
  a = prompt("Enter a number: ");
  a = Number.parseInt(a);
  num.push(a);
} while (a != 0);
console.log(num);

//practice question 3
let num1 = [10, 20, 3, 4, 5, 21, 12];
let b = num1.filter((val) => {
  return val % 10 == 0;
})
console.log(b);

//practice question 4
let num2 = [1, 2, 3, 4, 5];
let c = num2.map((x) => {
  return x * x;
})
console.log(c);