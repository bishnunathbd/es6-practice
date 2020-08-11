// function doubleIt(num) {
//    return num * 2;
// }

// const doubleIt = function (num) {
//    return num * 2;
// }

const doubleIt = num => num * 2;

const add = (num1, num2) => num1 + num2;

const give5 = () => 5;

const doMath = (num1, num2) => {
   const add = num1 + num2;
   const diff = num1 - num2;
   const result = add * diff;
   return result;
}
const result3 = doMath(7, 5);
console.log(result3);

const result2 = give5();
// console.log(result2);

const result = add(5, 45);
// const result = doubleIt(5);
// console.log(result);