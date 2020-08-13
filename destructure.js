const person = {name: 'Jack William', age: 20, job: 'facebooker', gfName: 'Ema Watson', address: 'Bangladesh', phone: '01717112233', friends: ['Tom hanks', 'Tom Cruise', 'Tom Yarn']};

// console.log(person.gfName);
// console.log(person.gfName);




// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone);
// console.log(gfName, phone);



// const {phone, gfName} = person;

// console.log(gfName, phone);
// console.log(gfName, phone);



const {phone, gfName, address, salary} = person;

// console.log(phone, gfName, salary, address);
// console.log(phone, gfName, salary, address);


// destructure complex object
const complexObject = {
   name: 'Bishnu',
   info: {
      gender: 'Male',
      city: 'Chattogram'
   }
}

const {city} = complexObject.info;
console.log(city);



// array destructure
const friends = ['John', 'Tom', 'Shakira', 'Rahim', 'Shuvo', 'David'];
const [first, second, ...restFriends] = friends;

// console.log(first);
// console.log(second);
console.log(restFriends);
