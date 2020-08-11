const ages = [12, 13, 14, 15, 16];
const ages2 = [21, 23, 24, 25];
const ages3 = [32, 33, 34];

// const allAges = ages.concat(ages2).concat([5].concat(ages3));
// console.log(allAges);

// spread operator
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const num1 = 450;
const num2 = 650;
const num3 = 350;

const bigNumber = Math.max(num1, num2, num3);
// console.log('big number: ' + bigNumber);

const arrayMax = [333, 666, 444, 999, 312, 777];

const maximum = Math.max(arrayMax);
// console.log(maximum); // NaN

const maximum2 = Math.max(...arrayMax);
console.log(maximum2);

// to get the maximum number in the array
const numbers = [2, 5, 1, 7, 8, 33, 29];
const largest = Math.max(...numbers);
console.log(largest);
