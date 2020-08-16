function doSomething() {
    console.log(3333);
}

console.log(2222);
// doSomething();
// setTimeout(doSomething, 3000)    // 3000ms or 3s

// setTimeout(function () {    
//     console.log('see you later');
// }, 3000);

// setTimeout(() => {  // arrow fn
//     console.log('used arrow function');
// }, 2000)

setInterval(function(){
    console.log('doing it');
}, 2000)

console.log(4444);
console.log(5555);