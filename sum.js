//sum of 2 numbers
const [, ,num1,num2]=process.argv;
const sum =(n1,n2)=>n1+n2;
// console.log(sum(n1,n2));
console.log(sum(parseInt(num1),parseInt(num2)));
console.log(sum(+num1,+num2));